import React, { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils' 
import './Signin.css'

const Signin = () => {

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth)
      console.log(response)
    }
    
    fetchData()
    .catch(console.error)

  }, [])


  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  const logGoogleRedirectUser = async () => {
    const {user} = await signInWithGoogleRedirect()
    console.log(user)
  }
  
  
  return (
    <div className="signin-container">
        <h1>Sign-in</h1>
        <button onClick={logGoogleUser}>
          Sign in with Google Popup
        </button>
        <button onClick={signInWithGoogleRedirect}>
          Sign in with Google Redirect
        </button>
    </div>
  )
}

export default Signin