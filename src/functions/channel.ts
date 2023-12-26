import { db, auth } from "../firebase"
import { setDoc, where, collection, serverTimestamp, onSnapshot, doc, query, getDocs } from "@firebase/firestore"
import { v4 as uuidv4 } from 'uuid';

const channelCollection = collection(db, 'channels')
const channelMessageCollection = collection(db, 'channel_message')




export const newChannel = async (channelName: string, workspace_id: string) => {

    if(!auth.currentUser){
        console.log('Must be logged in to create channel')
        return
    } 

    try{
        const channel_id = uuidv4()
        const channelRef = doc(channelCollection, channel_id)
        await setDoc(channelRef, {
            channel_id: channel_id,
            channelName: channelName,
            workspace_id: workspace_id,
            //@ts-ignore
            creator_id: auth.currentUser?.uid,
            createdAt: serverTimestamp()
        })

    } catch (err) {
        console.log('Error when creating channel', err)

    }

}

export const newChannelMessage = async (channel_id: string, messageBody: string) => {

    if(!auth.currentUser){
        console.log('Must be logged in to add message to channel')
        return
    }

const channel_message_id = uuidv4()
const channelMessageRef = doc(channelMessageCollection, channel_message_id)

try{
    await setDoc(channelMessageRef, {
        channel_message_id: channel_message_id,
        channel_id: channel_id,
        messageBody: messageBody,
        sender_id: auth.currentUser?.uid,
        createdAt: serverTimestamp()
    })
} catch (err) {
    console.log('Error while creating new message in Channel', err)
}


}

export const fetchChannelsInWorkspace = async (workspace_id: string) => {

    if(!auth.currentUser){
        console.log('Must be logged in to fetch channels')
        return
    }

    try{
        const channelQuery = query(channelCollection, where("workspace_id", '==', workspace_id))
        const channelQuerySnapshot = await getDocs(channelQuery)
        const workspaceChannels = <any>[]
        
        
        channelQuerySnapshot.forEach((doc) => {
            const channelData = doc.data()
            workspaceChannels.push(channelData)
        })
        
        return workspaceChannels
    } catch (err) {
        console.log(err)
    
    }

}

export const initialFetchForMessagesInChannel = async (channel_id: string) => {
    // Meant to display the inital messages in the channel. Used in conjunction with the listener function below.
    
    if(!auth.currentUser){
        console.log('Must be logged in to get workspaces')
        return 
     }
     try{
        const messageQuery = query(channelMessageCollection, where("channel_id", '==', channel_id))
        const channelMessagesSnapshot = await getDocs(messageQuery)
        const messagesInChannel = <any>[]

channelMessagesSnapshot.forEach((doc) => {
    const messageData = doc.data()
    messagesInChannel.push(messageData)
})
return messagesInChannel

   
    } catch {
        console.log('Error fetching messages in the channel')
    }
     }




export const listenForMessagesInChannel = async (channel_id: string, callback: (messages: any[]) => void) => {
    if(!auth.currentUser){
        console.log('Must be logged in')
        return 
     }
     try{
        const messageQuery = query(channelMessageCollection, where("channel_id", '==', channel_id))
        const unsubscribe = onSnapshot(messageQuery, (snapshot) => {
            const messagesInChannel = <any>[]
            snapshot.forEach((doc) => {
                const messageData = doc.data()
                messagesInChannel.push(messageData)
            })

            callback(messagesInChannel)
        })

        return unsubscribe

   
    } catch {
        console.log('Error getting user workspaces')
    }
}