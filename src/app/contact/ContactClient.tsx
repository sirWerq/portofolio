"use client";

import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { fadeUp } from "@/utils";
import { motion } from "motion/react";
import { SocmedPattern } from "@/patterns";
// import { ContactForm } from "@/components/organisms";

export default function ContactClient() {
    return (
        <div className="px-2 md:px-16 pt-20 space-y-2 lg:space-y-6 min-h-svh">
            <div className="space-y-1 lg:space-y-2">
                <h1 className="font-semibold text-2xl flex items-center h-[54px]">
                    Get in Touch
                </h1>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
                    {/* <ContactForm /> */}
                    <div className="space-y-8">
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ y: -5 }}
                            className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]"
                        >
                            <div className="flex items-start">
                                <MdOutlineEmail className="h-6 w-6 mr-3 mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold mb-1">
                                        Email
                                    </h3>
                                    <p>rifqx1904@gmail.com</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ y: -5 }}
                            className="bg-green-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]"
                        >
                            <div className="flex items-start">
                                <LuMapPin className="h-6 w-6 mr-3 mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold mb-1">
                                        Location
                                    </h3>
                                    <p>Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ y: -5 }}
                            className="bg-purple-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]"
                        >
                            <h3 className="text-lg font-bold mb-3">Connect</h3>
                            <div className="flex gap-3">
                                {SocmedPattern.map((socmed) => (
                                    <motion.a
                                        whileHover={{ scale: 1.2, rotate: -10 }}
                                        href={socmed.link}
                                        key={socmed.id}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                                    >
                                        <socmed.icon className="h-5 w-5" />
                                        <span className="sr-only">
                                            {socmed.name}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
