// Functions related to workspaces will be found here including creating them, leaving etc.
import {useState} from 'react'
import { db, auth } from "../firebase"
import { setDoc, collection, serverTimestamp, doc, addDoc } from "@firebase/firestore"
import { useAuth } from './useAuth'



const workspaceCollection = collection(db, 'workspace')
const workspaceMembersCollection = collection(db, 'workspace_members')

export const createWorkspace = async (workspaceName: string) => {

 if(!auth.currentUser){
    console.log('Must be logged in to create workspace')
    return
} 

try {
await addDoc(workspaceCollection, {
    workspaceName: workspaceName,
    //@ts-ignore
    creatorId: auth.currentUser?.uid,
    createdAt: serverTimestamp()
}).then((res) => console.log('Workspace successfully created', res)).catch((err) => console.log('Error when adding workspace to Firestore', err))

} catch(err) {
    console.log('Something went wrong when creating Workspace', err)
}

}

// create Workspace Members will be a function that relies on the successful execution of createWorkspace first, and will use the id from the result in order to create the list of members.

export const createWorkspaceMember = async (workspaceId: string, userType: number) => {

if(workspaceId && auth.currentUser)
await addDoc(workspaceMembersCollection, {
workspaceId: workspaceId,
userId: auth.currentUser?.uid,
userType: userType
}).then((res) => console.log(res)).catch((err) => console.log('Error when creating workspace members', err))
}