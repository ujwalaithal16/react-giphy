import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-fEWaDK5fNvOd1cEbrozxlUlLGh1GNrQ",
  authDomain: "react-giphy-10f47.firebaseapp.com",
  projectId: "react-giphy-10f47",
  storageBucket: "react-giphy-10f47.appspot.com",
  messagingSenderId: "163914159830",
  appId: "1:163914159830:web:9cb18b8e095a060a29db77",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
