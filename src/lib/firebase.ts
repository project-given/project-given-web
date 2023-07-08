// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics, type Analytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA0k_lR4-7Iq0UiZ5X4d9Lff1K_uUUYqVM',
	authDomain: 'project-given-web.firebaseapp.com',
	projectId: 'project-given-web',
	storageBucket: 'project-given-web.appspot.com',
	messagingSenderId: '1003761940015',
	appId: '1:1003761940015:web:78924538f92e122a7838da',
	measurementId: 'G-37FWRHDENQ'
};

// Initialize Firebase
let app: FirebaseApp;
let analytics: Analytics;

function initializeFirebase() {
	app = initializeApp(firebaseConfig);
	analytics = getAnalytics(app);
}

export { initializeFirebase };
