import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCuggaZ4GhJd2rvMgHCODyvzdM9Y9m0-fI",
    authDomain: "crudwithfirebase-23bec.firebaseapp.com",
    projectId: "crudwithfirebase-23bec",
    storageBucket: "crudwithfirebase-23bec.appspot.com",
    messagingSenderId: "811597198491",
    appId: "1:811597198491:web:f358ffe603cfa826e6c23e",
    measurementId: "G-BMMBKRYPSV"
  };
  const app = initializeApp(firebaseConfig);

 export const db=getFirestore(app);
