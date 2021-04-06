import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBYS0hNM4905WAVNTvyqinQvus_U3G7Ih4",
    authDomain: "react-todo-app-aadb3.firebaseapp.com",
    projectId: "react-todo-app-aadb3",
    storageBucket: "react-todo-app-aadb3.appspot.com",
    messagingSenderId: "383183073649",
    appId: "1:383183073649:web:801cedccb38ad52041c6d0"
});

const db = firebaseApp.firestore();

export default db;