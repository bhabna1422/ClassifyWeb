importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
// // Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
    apiKey: "AIzaSyAYGoDFGuhW6Fss3IFEJx0OFR3HVVXmX14",
    authDomain: "project-yottaf-ed0b4.firebaseapp.com",
    projectId: "project-yottaf-ed0b4",
    storageBucket: "project-yottaf-ed0b4.appspot.com",
    messagingSenderId: "1065405207262",
    appId: "1:1065405207262:web:7b81c347b55a42e425e84f",
    measurementId: "G-Z39MKGN2NZ"
};


firebase?.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
    console.log('Hello world from the Service Worker :call_me_hand:');
});
