"use client";

import Link from "next/link";

import { motion } from "motion/react";
import { fadeUp } from "@/utils";
import { navbarPattern, SocmedPattern } from "@/patterns";

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t-8 border-black">
            <div className="container mx-auto max-w-7xl px-6 py-12">
                <motion.div
                    variants={fadeUp}
                    className="grid grid-cols-1 md:grid-cols-4 gap-8"
                >
                    <div className="md:col-span-2">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-black mb-4">
                            Rifqi Alisba Garwita Sutrisno
                        </h2>
                        <p className="mb-6 max-w-md">
                            Front-End Web Development Enthusiast | Informatics
                            Engineering Student Undergraduate student in
                            Informatics Engineering at Indraprasta PGRI
                            University
                        </p>
                        <div className="flex gap-4">
                            {SocmedPattern.map((socmed) => (
                                <motion.div
                                    className="bg-white text-black p-2 rounded-none hover:bg-red-600 transition-colors"
                                    whileHover={{ scale: 1.2, rotate: -10 }}
                                    key={socmed.id}
                                >
                                    <Link
                                        href={socmed.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <socmed.icon className="h-5 w-5" />
                                        <span className="sr-only">
                                            {socmed.name}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div variants={fadeUp}>
                        <h3 className="text-xl font-bold mb-4">Links</h3>
                        <ul className="space-y-2">
                            {navbarPattern.map((item) => (
                                <motion.li whileHover={{ x: 5 }} key={item.id}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-red-600 transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li>rifqx1904@gmail.com</li>
                            <li>Jakarta, Indonesia</li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
                >
                    <p>
                        © {new Date().getFullYear()} Rifqi Alisba Garwita
                        Sutrisno. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
