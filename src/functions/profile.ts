import { setDoc, collection, doc, serverTimestamp } from "@firebase/firestore"
import { auth, db } from "../firebase"

const profileCollection = collection(db, 'profile')

export const createProfile = async (firstName: string, lastName: string, userName: string, firebaseuser_id: string) => {
// Take Firebase auth ID and create user based on it so we can actually stop using IDs everywhere


const profileRef = doc(profileCollection, firebaseuser_id)
try{
    
await setDoc(profileRef, {
user_id: firebaseuser_id,
firstName: firstName,
lastName: lastName,
profilePic: 'gs://not-a-slack-clone.appspot.com/Default_pfp.jpg',
userName: userName,
createdAt: serverTimestamp()
})



} catch (err) {
    return err
}


}

export const editProfile = async () => {


}