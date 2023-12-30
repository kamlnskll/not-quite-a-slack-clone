import { addDoc, collection, deleteDoc, doc, serverTimestamp, setDoc } from "@firebase/firestore"
import { db, auth } from "../firebase"
import { v4 as uuidv4 } from 'uuid'

// Functions related to adding contacts

const contactsCollection = collection(db, 'contacts')
const contactInvitesCollection = collection(db, 'contact_invites')


export const createContact = async (sender_id: string, receiver_id: string) => {

    if(!auth.currentUser){
        console.log('Must be logged in to create contact')
        return
    } 

    try {
        const contact_id = uuidv4()
        const contactsRef = doc(contactsCollection, contact_id)
        await setDoc(contactsRef, {
        contact_id: contact_id,
        user1: sender_id,
        user2: receiver_id,
        createdAt: serverTimestamp()
        })


    }

    catch (err ){


    }


}

export const createContactInvite = async (receiver_id: string) => {

    if(!auth.currentUser){
        console.log('Must be logged in to create contact')
        return
    } 

    try {

    await addDoc(contactInvitesCollection, {
        sender_id: auth.currentUser?.uid,
        receiver_id: receiver_id,
        createdAt: serverTimestamp()
    }).then((res) => console.log('Invite created successfully', res)).catch((err) => console.log('Error when inviting user', err))



    }

    catch (err ){

        
    }


}

export const acceptContactInvite = async (contact_id: string) => {

    if(!auth.currentUser){
        console.log('Must be logged in to create contact')
        return
    } 

    try {

    }

    catch (err ){

        
    }

}


export const declineContactInvite = async (contact_id: string) => {

    if(!auth.currentUser){
        console.log('Must be logged in to create contact')
        return
    } 
    const inviteRef = doc(contactInvitesCollection, contact_id)

    try {
        await deleteDoc(inviteRef).then((res) => console.log(res)).catch((err) => console.log(err))

    }

    catch (err ){

        
    }

}

