import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

//firebase para autenticación
firebase.initializeApp({
    apiKey: "AIzaSyCLA_dSSlsWUmaV6w7nJil8RiwdM2AD5uQ",
    authDomain: "laborum-scl011.firebaseapp.com",
    databaseURL: "https://laborum-scl011.firebaseio.com",
    projectId: "laborum-scl011",
    storageBucket: "laborum-scl011.appspot.com",
    messagingSenderId: "116883762326",
    appId: "1:116883762326:web:f4c9872febdee43da366b7",
    measurementId: "G-MT17B4HRXW"
  });

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
