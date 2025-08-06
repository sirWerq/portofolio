"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LiaHamburgerSolid } from "react-icons/lia";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed w-full h-14 z-50 bg-[#DEE8CE] flex items-center justify-between text-xl px-4 sm:px-6 lg:px-12">
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/sword.svg"
                    alt="Logo"
                    width={50}
                    height={50}
                />
                <p className="text-lg sm:text-xl">rifqi alisba</p>
            </Link>
            <div className="hidden md:block">
                <ul className="flex items-center gap-4 lg:gap-8">
                    <li className="hover:underline">
                        <Link href="#home">home</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="#experiences">experiences</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="#projects">projects</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="#contact">contact</Link>
                    </li>
                </ul>
            </div>
            <LiaHamburgerSolid 
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="md:hidden flex justify-center items-center w-8 h-8"
            />
            <div className={`
                absolute top-14 left-0 w-full bg-[#DEE8CE] transition-all duration-300 ease-in-out md:hidden
                ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}>
                <ul className="flex flex-col items-center py-4 space-y-4 text-lg">
                    <li className="hover:underline">
                        <Link href="#home">home</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="#experiences">experiences</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="#projects">projects</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="#contact">contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}