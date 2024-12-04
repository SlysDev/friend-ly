const {initializeApp} = require('firebase/app')
const {getAuth} = require('firebase/auth')

// TODO: Need to create a file in this folder called firebaseCred and fill these fields in. 
// These fields can be found in Project Settings -> Your Apps in Firebase console. 
// (You might need to create a web app for the project if it doesn't exist).

import {FIREBASE_API_KEY, 
  FIREBASE_APP_ID, 
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MEASUREMENT_ID, 
  FIREBASE_MESSAGING_SENDER_ID, 
  FIREBASE_PROJECT_ID, 
  FIREBASE_STORAGE_BUCKET} from './firebaseCred'

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export { auth }