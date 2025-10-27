import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA498PkLEENhxSBo_gcwXQ7VliyZ-2Vvxs",
  authDomain: "fir-05-6fd28.firebaseapp.com",
  projectId: "fir-05-6fd28",
  storageBucket: "fir-05-6fd28.firebasestorage.app",
  messagingSenderId: "194273484361",
  appId: "1:194273484361:web:7f6458bd431c9ddb622998"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()

export const storage = app.storage()

export const db = app.firestore()

//asi configuramos firebase en nuestro proyecto 

