import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApP2z0thCDLkdq3n3Sqlmhz_F6jkh61YY",
  authDomain: "fir-auth-demo-6d602.firebaseapp.com",
  projectId: "fir-auth-demo-6d602",
  storageBucket: "fir-auth-demo-6d602.appspot.com",
  messagingSenderId: "631041508176",
  appId: "1:631041508176:web:35696b1f2fa444356ea255",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
