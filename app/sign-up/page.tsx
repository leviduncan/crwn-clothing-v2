'use client'

import { useState } from 'react'

function page() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const onSubmit = () => { 
    
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold">Create account</h1>
      <input
      type="text"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="text-xl px-4 rounded-md border border-gray-300 mb-4"
      />
      <input
      type="text"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="text-xl px-4 rounded-md border border-gray-300 mb-4"
      />
      <button
      className="bg-yelloe-500 text-black px-4 py-2 rounded-md font-bold"
      onClick={onSubmit}
      >
        Sign Up
      </button>
    </div>
  )
}

export default page