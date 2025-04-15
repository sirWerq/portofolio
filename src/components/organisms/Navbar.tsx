"use client";

import { handleToggle, navbarPattern } from "@/patterns";
import { Navlink } from "../molecules";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useGlobalHooks } from "@/hooks";

export default function Navbar() {
    const { isMenuOpen, setIsMenuOpen } = useGlobalHooks();

    return (
        <nav className="w-full fixed top-0 z-50 bg-white border-b p-4 md:px-16">
            <div>
                <button
                    className="lg:hidden text-2xl"
                    onClick={() => handleToggle(setIsMenuOpen, isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
                </button>
            </div>
            <ul
                className={`${
                    isMenuOpen ? "flex" : "hidden"
                } flex-col lg:flex lg:flex-row lg:items-center lg:justify-end w-full lg:w-auto gap-8 p-4 lg:px-16 lg:py-0 bg-white`}
            >
                {navbarPattern.map((item) => (
                    <Navlink
                        href={item.href}
                        key={item.id}
                        variant={
                            item.id === 4
                                ? "border border-black border-r-4 border-b-4"
                                : ""
                        }
                    >
                        {item.title}
                    </Navlink>
                ))}
            </ul>
        </nav>
    );
}
