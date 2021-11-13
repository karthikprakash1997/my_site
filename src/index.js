import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from "firebase";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
const json = require("./resume.json");

let config = {
  apiKey: "AIzaSyAr1T7yT1wJJUuAA1ieE4CP1FjIyZFXd-Y",
  authDomain: "download-b5515.firebaseapp.com",
  databaseURL: "https://download-b5515.firebaseio.com",
  projectId: "download-b5515",
  storageBucket: "download-b5515.appspot.com",
  messagingSenderId: "756269641192",
  appId: "1:756269641192:web:07dc9e40190e27fe28c85d",
  measurementId: "G-66RNGXT453"
};

firebase.initializeApp(config);

ReactDOM.render(<App jsonObj={json} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
