import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App singleton
export const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore targeting provisioned databaseId
export const db = getFirestore(
  firebaseApp,
  (firebaseConfig as any).firestoreDatabaseId || '(default)'
);

// Initialize Firebase Storage
export const storage = getStorage(firebaseApp);

// Initialize Firebase Auth
export const auth = getAuth(firebaseApp);

