import { setDoc, collection, doc, serverTimestamp, getDoc } from "@firebase/firestore"
import { auth, db } from "../firebase"


const profileRef = collection(db, 'profile')

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

export const fetchProfileData = async (firebaseuser_id: string) => {

const docRef = doc(profileRef, firebaseuser_id)

try {

    const profileSnap = await getDoc(docRef)
    if (profileSnap.exists()){
        return profileSnap.data()
        // console.log('Document data', profileSnap.data())
    }

    else {
        console.log('No such document exists!')
    }


}
catch (err) {

    console.log(err)

}


}

export const editProfile = async () => {


}