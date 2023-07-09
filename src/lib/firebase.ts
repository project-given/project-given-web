import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics, type Analytics } from 'firebase/analytics';
import { getStorage, type FirebaseStorage, ref } from 'firebase/storage';
import { Firestore, collection, doc, getFirestore } from 'firebase/firestore';

// Web app's Firebase configuration
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
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);
const storageGet: FirebaseStorage = getStorage(app);
const firestoreGet: Firestore = getFirestore(app);

const firestore = {
	infoDoc: doc(firestoreGet, 'main/info'),
	projectEducationInfoDoc: doc(firestoreGet, 'main/latestNews/projectEducation/info'),
	projectHealthInfoDoc: doc(firestoreGet, 'main/latestNews/projectHealth/info'),

	projectEducationCollection: collection(firestoreGet, 'main/latestNews/projectEducation'),
	projectHealthCollection: collection(firestoreGet, 'main/latestNews/projectHealth'),
	youtubeCollection: collection(firestoreGet, 'main/latestNews/youtube')
};

const storage = {
	info: ref(storageGet, 'main/info'),
	projectEducation: ref(storageGet, 'main/projectEducation'),
	projectHealth: ref(storageGet, 'main/projectHealth')
};

export { app, analytics, storage, firestore };
