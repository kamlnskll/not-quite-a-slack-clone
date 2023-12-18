// Functions related to workspaces will be found here including creating them, leaving etc.
import {useState} from 'react'
import { db, auth } from "../firebase"
import { setDoc, where, collection, serverTimestamp, doc, addDoc, query, getDocs, getDoc } from "@firebase/firestore"
import { v4 as uuidv4 } from 'uuid';




const workspaceCollection = collection(db, 'workspace')
const workspaceMembersCollection = collection(db, 'workspace_members')

export const createWorkspace = async (workspaceName: string) => {

 if(!auth.currentUser){
    console.log('Must be logged in to create workspace')
    return
} 

try {
    const workspace_id = uuidv4()
    const workspaceRef = doc(workspaceCollection, workspace_id)


await setDoc(workspaceRef, {
    workspace_id: workspace_id,
    workspaceName: workspaceName,
    //@ts-ignore
    creator_id: auth.currentUser?.uid,
    createdAt: serverTimestamp()
})

console.log('Workspace created successfully')
return workspace_id

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
}).then((res) => console.log('Success creating workspace member', res)).catch((err) => console.log('Error when creating workspace members', err))
}

export const getUserWorkspaces = async () => {
if(!auth.currentUser){
   console.log('Must be logged in to get workspaces')
   return 
}

try{
    const workspaceQuery = query(workspaceMembersCollection, where('userId', '==', auth.currentUser?.uid))
    const querySnapshot = await getDocs(workspaceQuery)
    const userWorkspaces = <any>[]

    querySnapshot.forEach((doc) => {
        const workspaceData = doc.data()
       userWorkspaces.push(workspaceData)
    })

    return userWorkspaces
} catch {
    console.log('Error getting user workspaces')
}
// Get the workspace id where the user is a member
// Get the info of those workspaces

}

export const fetchWorkspace = async (workspace_id: string) => {
if(!auth.currentUser){
    console.log('Must be a user to get workspace')
    return
}

try{
    const docRef = doc(db, 'workspace', workspace_id)
    const docSnapshot = await getDoc(docRef)
    if(docSnapshot.exists()){
        const data = docSnapshot.data()
        return data
    } else {
        console.log('No such document!')
    }
}
catch{
    console.log('Error while fetching workspace')
}

}

export const fetchWorkspaceUsers = async () => {
    if(!auth.currentUser){
        console.log('Must be logged in to get workspaces')
        return 
     }
     
}


export const workspaceInvite = async () => {

    
}