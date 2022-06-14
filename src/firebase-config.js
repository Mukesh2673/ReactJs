import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword} from "firebase/auth"
import { useState, useEffect } from "react";


//import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBmlF0Xtflf5PHZBXdmpWvKl-oDLThxITk",
  authDomain: "loginauthentication-3a857.firebaseapp.com",
  projectId: "loginauthentication-3a857",
  storageBucket: "loginauthentication-3a857.appspot.com",
  messagingSenderId: "631681740538",
  appId: "1:631681740538:web:6699cd3a8bc154b05a2343",
  measurementId: "G-HCG1TGP0H6"
};
//initialize Firebase

initializeApp(firebaseConfig);
const auth=getAuth();


//Custom Hook
export function useAuth(){
const [currentUser,setCurrentUser]=useState();

useEffect(()=>{
  const unsub=onAuthStateChanged(auth,user=>setCurrentUser(user));
  return unsub;
},[])
return currentUser
}

export function signup(email,password){
  return createUserWithEmailAndPassword(auth,email,password);
}

export function login(email,password){
  return signInWithEmailAndPassword(auth,email,password);
}


export function logout(){
return signOut(auth);


}


