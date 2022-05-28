import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCTyFIh6jD8l0sns-0H0Pu91p3nozb5cZw",
    authDomain: "test-a802c.firebaseapp.com",
    projectId: "test-a802c",
    storageBucket: "test-a802c.appspot.com",
    messagingSenderId: "210048054161",
    appId: "1:210048054161:web:71ed0912405b84bdcea030"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db
}