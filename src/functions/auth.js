import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { createProfile } from "./profile";

export const registerUser = async (email, password, firstName, lastName, userName) => {

  await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('User created successfully', user)
    createProfile(firstName, lastName, userName, user.uid).then((res) => console.log('Created user profile', res))
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Error:', errorCode, ':', errorMessage)
  });

}

  export const loginUser = async (email, password) => {

    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('User signed in', user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error:', errorCode, ':', errorMessage)
    });

  }
  
  export const logOut = () => {
signOut(auth).then((res) => console.log(res)).catch((err) => console.log(err))
  }
