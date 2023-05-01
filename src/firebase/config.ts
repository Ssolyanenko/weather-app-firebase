import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyBSosQ8nrGC2rIQnTDfnyrZ4ZV8ODBiUc8",
    authDomain: "weather-app-50814.firebaseapp.com",
    projectId: "weather-app-50814",
    storageBucket: "weather-app-50814.appspot.com",
    messagingSenderId: "11361462058",
    appId: "1:11361462058:web:b9f6719fbc5e841f91e053",
    measurementId: "G-L7Y5KRL3KW"
};

export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBSosQ8nrGC2rIQnTDfnyrZ4ZV8ODBiUc8",
//     authDomain: "weather-app-50814.firebaseapp.com",
//     projectId: "weather-app-50814",
//     storageBucket: "weather-app-50814.appspot.com",
//     messagingSenderId: "11361462058",
//     appId: "1:11361462058:web:b9f6719fbc5e841f91e053",
//     measurementId: "G-L7Y5KRL3KW"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);