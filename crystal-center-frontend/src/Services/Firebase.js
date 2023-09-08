// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, signInWithPopup, getAuth, signOut} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbpnclYnYe9mjTdbM5fcKT0F3Oq0kJslk",
  authDomain: "k-krystal-app.firebaseapp.com",
  projectId: "k-krystal-app",
  storageBucket: "k-krystal-app.appspot.com",
  messagingSenderId: "644004710941",
  appId: "1:644004710941:web:00bf6f7f375488ef4d54f4",
  measurementId: "G-SV1VJHM0HR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
auth.useDeviceLanguage();

const googleProvider = new GoogleAuthProvider()


export const signInWithGoogle = () => {
    try {
  signInWithPopup(auth, googleProvider).then((res) => {
        const user = res.user
        console.log(user)
    });
     } catch (err) {
      console.log(err);
    }
  };

  export const logOut = async () =>{
    try {
      await signOut(auth)
      alert("You've signed out - Come Back Soon.")
    } catch(err) {
      console.log(err)
    }
  }