import React from "react";
import Link from "next/link"
import Logo from "./Logo";

const Links = [
    { href: "/", text: "home" },
    { href: "/about", text: "about" },
    { href: "/shop", text: "shop" },
    { href: "/contact", text: "contact" },
    { href: "/sign-up", text: "sign-up" },
]


const Navbar = () => {
    return (
        <nav className="bg-gray-800 fixed w-full z-10">
            <div className="navbar max-w-6xl mx-auto flex justify-between">
                <Logo />
                <ul className="menu md:ml-8 flex flex-col sm:flex-row py-5">
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
                </ul>
            </div>
        </nav>
    )
}

export default Navbar