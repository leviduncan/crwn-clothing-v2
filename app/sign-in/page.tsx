'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '../firebase'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import AccountAccess from '../components/AccountAccess'

function page() {
  const router = useRouter()

  const [signInUserWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = async () => {
    await signInUserWithEmailAndPassword(email, password)
    router.push("/")
  }

  const accType: { title: string }[] = [
    {
      title:"signin"
    }
  ]

  return (
    <div className="flex justify-center items-center flex-col h-full">
      <h1 className="text-4xl font-bold mb-4">Sign in page</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-xl px-4 rounded-md border border-gray-300 mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="text-xl px-4 rounded-md border border-gray-300 mb-4"
      />
      <button
        className="bg-yellow-500 text-black px-4 py-2 rounded-md font-bold"
        onClick={onSubmit}
      >
        Sign In
      </button>
      {
        accType.map((type) => {
          return(
            <AccountAccess key={type.title} accType={type.title} />
          )
        })
      }
    
    </div>
  )
}

export default page