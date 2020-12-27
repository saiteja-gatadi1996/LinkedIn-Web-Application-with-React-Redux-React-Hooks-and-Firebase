import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB8Sz86Y34qw4T1mI-rwE6_5orff3amTWo",
  authDomain: "linkedin-web-app.firebaseapp.com",
  projectId: "linkedin-web-app",
  storageBucket: "linkedin-web-app.appspot.com",
  messagingSenderId: "902460239317",
  appId: "1:902460239317:web:076eac59d45d2b3186e15c",
  measurementId: "G-CH8W12ZEDZ"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth=firebase.auth();

export{db,auth};