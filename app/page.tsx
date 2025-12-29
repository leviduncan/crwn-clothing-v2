'use client'

import { SignedIn } from "./components/signed-in"
import { SignedOut } from "./components/signed-out"
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "./firebase"
import { IconFidgetSpinner } from "@tabler/icons-react"
import SignIn from "./sign-in/page"


export default function Home() {
  const [user, loading] = useAuthState(auth)
  const [signOut] = useSignOut(auth)
  return (
    <div className="font-sans h-5/5">
      {loading ? (
        <IconFidgetSpinner className="animate-spin w-12 h-12 mx-auto h-full" />
      ) : (
        <>
          <SignedIn>
            <div className="flex flex-col justify-center text-primary-500 h-full text-center">
              <h1 className="text-3xl font-bold">
                Signed in as
              </h1>
              {
                user?.isAnonymous ? (
                  <p>Anonymous</p>
                ) : (
                  <>
                    <p>{user?.email}</p>
                    <p>
                      Email verified:{" "}
                      {user?.emailVerified ? (
                        <span className="text-green-500 font-bold">Verified</span>
                      ) : (
                        <span className="text-red-500 font-bold">Not verified</span>
                      )}
                    </p>
                  </>
                )
              }
              <button onClick={signOut} className="border w-50 mx-auto my-5 capitalize rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-black hover:text-white">
                Sign Out
              </button>
            </div>
          </SignedIn>
          <SignedOut>
              <SignIn />
          </SignedOut>
        </>
      )}
      
      
    </div>
  );
}
