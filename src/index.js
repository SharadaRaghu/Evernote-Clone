import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
// import * as serviceWorker from './serviceWorker';

// const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyBn_OMLHyXOljw-Cq8Rk0l1xFSxVzGQiMg",
  authDomain: "evernote-clone-c805c.firebaseapp.com",
  projectId: "evernote-clone-c805c",
  storageBucket: "evernote-clone-c805c.appspot.com",
  messagingSenderId: "625297320524",
  appId: "1:625297320524:web:87ca380b2519f1d428a2e9",
  measurementId: "G-CRPYTHBS5Z"
});



ReactDOM.render(<App />,document.getElementById('evernote-container'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
