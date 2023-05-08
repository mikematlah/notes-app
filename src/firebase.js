
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB8RFIOUKhrXrVKGvN1IpjSH2NyLE3LxBY",
  authDomain: "react-notes-5f7d5.firebaseapp.com",
  projectId: "react-notes-5f7d5",
  storageBucket: "react-notes-5f7d5.appspot.com",
  messagingSenderId: "598032907190",
  appId: "1:598032907190:web:463641ce563d50f34c9f17"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')
/*https://console.firebase.google.com/u/0/project/react-notes-5f7d5/firestore/data/~2Fnotes~2F9aPChGKNzjK1wn9P0VvE?view=query-view&scopeType=collection&scopeName=%2Fnotes&query=*/
