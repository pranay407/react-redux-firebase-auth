import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUYpOucvK3FZvV2SOYQo_nTaX7KNkVSJY",
  authDomain: "react-redux-auth-bf458.firebaseapp.com",
  projectId: "react-redux-auth-bf458",
  storageBucket: "react-redux-auth-bf458.appspot.com",
  messagingSenderId: "1027632342683",
  appId: "1:1027632342683:web:7971cb6b91c0881edd883e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
