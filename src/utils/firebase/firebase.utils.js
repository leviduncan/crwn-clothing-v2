import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC_ffeTKYQdu-OZauA0U1-HS21dYjFKarI",
  authDomain: "crwn-clothing-db-eee96.firebaseapp.com",
  projectId: "crwn-clothing-db-eee96",
  storageBucket: "crwn-clothing-db-eee96.appspot.com",
  messagingSenderId: "261990107426",
  appId: "1:261990107426:web:1de09f076e1d4daee6bd7b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider()
GoogleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, GoogleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid) // db, 'collections', id

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef) // this is the data
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }
  return userDocRef
}