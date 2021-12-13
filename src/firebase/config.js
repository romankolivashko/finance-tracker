import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDJ4j7k2aDxr90kdmugy57XmdaeFA3kT5U",
  authDomain: "finance-tracker-311e3.firebaseapp.com",
  projectId: "finance-tracker-311e3",
  storageBucket: "finance-tracker-311e3.appspot.com",
  messagingSenderId: "679447351606",
  appId: "1:679447351606:web:239a7905a3a4889968a397"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }
