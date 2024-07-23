import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4T9eOwWyEtTP4QnQFKw7XmMLw5lqyI4Q",
  authDomain: "linkedin-clone-fa955.firebaseapp.com",
  projectId: "linkedin-clone-fa955",
  storageBucket: "linkedin-clone-fa955.appspot.com",
  messagingSenderId: "872906554536",
  appId: "1:872906554536:web:7e4c4372b5bfb77287969d",
  measurementId: "G-9V0HXXW416",
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { db, auth };
