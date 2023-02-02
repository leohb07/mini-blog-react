import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAW1er4ZrxGbm50Mive8JiLENQt-p-qsU",
  authDomain: "miniblog-8ff4d.firebaseapp.com",
  projectId: "miniblog-8ff4d",
  storageBucket: "miniblog-8ff4d.appspot.com",
  messagingSenderId: "212710413906",
  appId: "1:212710413906:web:c6d1e34bee47ab0b30f18b"
};

const app = initializeApp(firebaseConfig);

// instanciando o banco de dados do firebase
const db = getFirestore(app)

export {
  db, app
};
