import { auth } from "../firebase"


// This file will be responsible for handling chat related functions in both workspaces and between users.


export const getMessageSenderData = async (sender_id: string) => {
   
    if(!auth.currentUser){
        console.log('Must be logged in to create channel')
        return
    } 


}