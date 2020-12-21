const firebase = require('firebase')
const firebaseConfig = {
    apiKey: "AIzaSyDx2oN2zHZPSoglCpHsG8JNk32w_Zfk9vw",
    authDomain: "myfirstwebpage-16260.firebaseapp.com",
    projectId: "myfirstwebpage-16260",
    storageBucket: "myfirstwebpage-16260.appspot.com",
    messagingSenderId: "482042499549",
    appId: "1:482042499549:web:6782ffd5287ee512b4a634",
    measurementId: "G-4V79LS6658"
}
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

module.exports = {
    db,
}