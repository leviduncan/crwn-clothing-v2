// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_ffeTKYQdu-OZauA0U1-HS21dYjFKarI",
  authDomain: "crwn-clothing-db-eee96.firebaseapp.com",
  projectId: "crwn-clothing-db-eee96",
  storageBucket: "crwn-clothing-db-eee96.firebasestorage.app",
  messagingSenderId: "261990107426",
  appId: "1:261990107426:web:1de09f076e1d4daee6bd7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth(app)
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)