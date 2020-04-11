import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAlMHzdYoN7qLBwOvTL89nnfn3rSz8Sa0Y",
  authDomain: "cs394-scheduler-e7d6f.firebaseapp.com",
  databaseURL: "https://cs394-scheduler-e7d6f.firebaseio.com",
  projectId: "cs394-scheduler-e7d6f",
  storageBucket: "cs394-scheduler-e7d6f.appspot.com",
  messagingSenderId: "718054980847",
  appId: "1:718054980847:web:6fd952d7e9df70df276f1a",
  measurementId: "G-LHCZ33ZBPB"
};

firebase.initializeApp(firebaseConfig);

export default firebase;