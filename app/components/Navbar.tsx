'use client'

import React from "react";
import Link from "next/link"
import Logo from "./Logo";
import { SignedIn } from "./signed-in";
import { SignedOut } from "./signed-out"
import { auth } from "../firebase"
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

const Links = [
    { href: "/home", text: "home" },
    { href: "/about", text: "about" },
    { href: "/shop", text: "shop" },
    { href: "/contact", text: "contact" },
]


const Navbar = () => {
    const [user, loading] = useAuthState(auth)
    const [signOut] = useSignOut(auth)
    return (
        <nav className="bg-gray-800 fixed w-full z-10">
            <div className="navbar max-w-6xl mx-auto flex justify-between">
                <Logo />
                <ul className="menu md:ml-8 flex flex-col sm:flex-row py-5">
                    <SignedIn>
                        {Links.map((link) => {
                            return (
                                <li key={link.href}>
                                    <Link
                                        className="capitalize rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                        href={link.href}>
                                        {link.text}
                                    </Link>
                                </li>
                            )
                        })}
                        <li>
                                    <Link  onClick={signOut}
                                        className="capitalize rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                        href="">
                                        sign out
                                    </Link>
                                </li>
                    </SignedIn>
                    <SignedOut>
                        <li>
                            <Link
                                className="capitalize rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                href="/">
                                sign in
                            </Link>
                        </li>
                    </SignedOut>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar