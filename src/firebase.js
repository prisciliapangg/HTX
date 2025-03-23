import { getFirestore, addDoc, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const firebase = initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const analytics = getAnalytics(app);

export { db, addDoc, collection, getFirestore, analytics };

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import { getFirestore, addDoc, collection } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: "AIzaSyAXgjFG34LKEOA3_Yu1vPx5n8AQUDOMt3w",
// 	authDomain: "htx-test-4bc4d.firebaseapp.com",
// 	projectId: "htx-test-4bc4d",
// 	storageBucket: "htx-test-4bc4d.firebasestorage.app",
// 	messagingSenderId: "403799742521",
// 	appId: "1:403799742521:web:1a3a4d269b50a2b21c15e8",
// 	measurementId: "G-MMDWTJBEPF",
// };

// const firebase = initializeApp(firebaseConfig);

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(firebase);
// const analytics = getAnalytics(app);

// export { db, addDoc, collection, getFirestore, analytics };
