'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification
} from "react-firebase-hooks/auth"
import { auth } from '../firebase'
import AccountAccess from '../components/AccountAccess'
import { stringifyCookie } from 'next/dist/compiled/@edge-runtime/cookies'

function page() {
  const router = useRouter()
  const [createUser] = useCreateUserWithEmailAndPassword(auth)
  const [sendEmailVerification] = useSendEmailVerification(auth)


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = async () => {
    await createUser(email, password)
    await sendEmailVerification()
    router.push("/")
  }


  const accType: { title: string }[] = [
    {
      title:"create"
    }
  ]

  return (
    <div className="flex justify-center items-center flex-col h-full">
      <h1 className="text-4xl font-bold mb-4">Create account</h1>
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
        className="border w-50 mx-auto my-5 capitalize rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-black hover:text-white"
        onClick={onSubmit}
      >
        Sign Up
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