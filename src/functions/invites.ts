import { collection, deleteDoc, where, doc, onSnapshot, query, serverTimestamp, setDoc } from "@firebase/firestore"
import { auth, db } from "../firebase"
import { v4 as uuidv4 } from 'uuid';
import { createWorkspaceMember } from "./workspace";



const workspaceInvitesCollection = collection(db, 'workspace_invites')
const workspaceMembersCollection = collection(db, 'workspace_members')


export const createInviteToWorkspace = async (workspace_id: any, receiver_id: any) => {
    
    if(!auth.currentUser){
        console.log('Must be logged in to invite to Workspace')
        return 
     }

     if(receiver_id === auth?.currentUser?.uid){
        console.warn('Cannot invite yourself!')
        return
    }
     try {
        
        const invite_id = uuidv4()
        const inviteRef = doc(db, 'workspace_invites', workspace_id)
        await setDoc(inviteRef, {
            invite_id: invite_id,
            sender_id: auth?.currentUser?.uid,
            receiver_id: receiver_id,
            createdAt: serverTimestamp(),
            workspace_id: workspace_id
        })


     } catch (err) {
        console.log(err)
     }

    
}

export const workspaceInviteListener = async (receiver_id: any, callback: (messages: any[]) => void) => {
    
    if(!auth.currentUser){
        console.log('Must be logged in to invite to Workspace')
        return 
     }

     try {
        
        const inviteQuery = query(workspaceInvitesCollection, where("receiver_id", '==', receiver_id))
        const unsubscribe = onSnapshot(inviteQuery, (snapshot) => {
            const workspaceInvites = <any>[]
            snapshot.forEach((doc) => {
                const invitesData = doc.data()
                workspaceInvites.push(invitesData)
            })

            callback(workspaceInvites)
        })

        return unsubscribe

     } catch (err) {
        console.log(err)

     }

}

export const acceptWorkspaceInvite = async (workspace_id: string, invite_id: string) => {
       
    if(!auth.currentUser){
        console.log('Must be logged in to invite to Workspace')
        return 
     }

    
     const inviteRef = doc(workspaceInvitesCollection, invite_id)

    //  if(workspaceMembersCollection){
    //     console.log(`You're already a member of this Workspace.`)
    //     return
    //  }

// User type 1 = Regular user
// User type 2 = Admin user
// User type 3 = Workspace creatore

     try {
        createWorkspaceMember(workspace_id, 1).then((res) => {
            console.log(res)
            deleteDoc(inviteRef).then((res) => {console.log(res)}).catch((err) => console.warn('Error when deleting invite', err))
        }).catch((err) => console.warn('Error when joining workspace', err))

     }

    catch (err) {


    }

}


export const declineWorkspaceInvite = async (invite_id: string) => {
       
    if(!auth.currentUser){
        console.log('Must be logged in to invite to Workspace')
        return 
     }
     const inviteRef = doc(workspaceInvitesCollection, invite_id)

     try {
        await deleteDoc(inviteRef).then((res) => {console.log(res)}).catch((err) => console.warn('Error when deleting invite', err))

     }

    catch (err) {

        
    }

}