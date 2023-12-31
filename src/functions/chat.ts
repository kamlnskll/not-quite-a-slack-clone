import { collection } from "@firebase/firestore"
import { auth, db } from "../firebase"
import { getAuth } from "firebase/auth"


// This file will be responsible for handling chat related functions in both workspaces and between users.

const messageCollection = collection(db, 'channel_message')



export const getMessageSenderData = async (sender_id: string) => {
   
    if(!auth.currentUser){
        console.log('Must be logged in to create channel')
        return
    } 

    try {


        
    }

    catch (err) {
        return err
    }



}