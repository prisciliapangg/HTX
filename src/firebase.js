// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
// 	apiKey: "AIzaSyCr87UQwx_ErNFKGiCD7s9zT5tvmPwinq0",
// 	authDomain: "poptrade-c2650.firebaseapp.com",
// 	projectId: "poptrade-c2650",
// 	storageBucket: "poptrade-c2650.appspot.com",
// 	messagingSenderId: "327732712069",
// 	appId: "1:327732712069:web:011bc4cfb211fafcd8cfec",
// 	measurementId: "G-E2H66S2NVC",
// };

// // Initialize Firebase
// const firebase = initializeApp(firebaseConfig);

// // Initialize services
// const auth = getAuth(firebase);

// // Optional: Initialize Analytics
// const analytics = getAnalytics(firebase);

// export { firebase, db, auth, analytics };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAXgjFG34LKEOA3_Yu1vPx5n8AQUDOMt3w",
	authDomain: "htx-test-4bc4d.firebaseapp.com",
	projectId: "htx-test-4bc4d",
	storageBucket: "htx-test-4bc4d.firebasestorage.app",
	messagingSenderId: "403799742521",
	appId: "1:403799742521:web:1a3a4d269b50a2b21c15e8",
	measurementId: "G-MMDWTJBEPF",
};

// // Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const analytics = getAnalytics(app);

export { db, addDoc, collection, getFirestore, analytics };
