"use client";

import Link from "next/link";

import { socmedPattern } from "@/patterns";

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t-8 border-black">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
                    <div className="flex-1 md:max-w-md">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-black mb-4">
                            Rifqi Alisba Garwita Sutrisno
                        </h2>
                        <p className="mb-6 text-sm sm:text-base text-gray-300 leading-relaxed">
                            software engineer | Informatics
                            Engineering Student Undergraduate student in
                            Informatics Engineering at Indraprasta PGRI
                            University
                        </p>
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                            {socmedPattern.map((socmed) => (
                                <div
                                    className="bg-white text-black p-2 rounded-none hover:bg-red-600 hover:text-white transition-colors duration-200"
                                    key={socmed.id}
                                >
                                    <Link
                                        href={socmed.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <socmed.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                        <span className="sr-only">
                                            {socmed.name}
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <h3 className="text-lg sm:text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                            <li className="break-all">rifqx1904@gmail.com</li>
                            <li>Jakarta, Indonesia</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left">
                        © {new Date().getFullYear()} Rifqi Alisba Garwita
                        Sutrisno. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}