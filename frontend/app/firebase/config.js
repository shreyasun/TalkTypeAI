import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.firebase_apikey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

const auth = getAuth(app)

export {app, auth, analytics}


