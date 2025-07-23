// src/lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAfZfQSb7mxnMJQtp7K57JT3wb4yalxeu0",
  authDomain: "partsmr-a4541.firebaseapp.com",
  projectId: "partsmr-a4541",
  storageBucket: "partsmr-a4541.firebasestorage.app",
  messagingSenderId: "657536532787",
  appId: "1:657536532787:web:83a38c8f7ef0567fbf7e46",
  measurementId: "G-QYVF6CR3X8"
}

// Asegura instancia única
const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const db: Firestore = getFirestore(app)
