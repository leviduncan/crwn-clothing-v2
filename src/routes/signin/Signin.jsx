import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils' 
import './Signin.css'

function Signin() {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  
  
  return (
    <div className="signin-container">
        <h1>Sign-in</h1>
        <button onClick={logGoogleUser}>
          Sign in with Google Popup
        </button>
    </div>
  )
}

export default Signin