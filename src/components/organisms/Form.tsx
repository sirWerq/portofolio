"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { fadeUp, slideInLeft } from "@/utils";

interface StatusState {
    loading: boolean;
    success: boolean;
    error: string | null;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<StatusState>({
        loading: false,
        success: false,
        error: null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev: FormData) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                const error = await response.text();
                setStatus({ loading: false, success: false, error });
            }
        } catch (error: unknown) {
            console.error("Error sending email:", error);
            setStatus({
                loading: false,
                success: false,
                error: "Failed to send email. Please try again.",
            });
        }
    };

    return (
        <motion.div variants={slideInLeft} className="lg:w-2/3">
            <div className="text-4xl font-black mb-8">Send Me a Message</div>

            <motion.div
                variants={fadeUp}
                className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0)]"
            >
                {status.success ? (
                    <motion.div
                        variants={fadeUp}
                        className="p-4 bg-green-100 border-2 border-green-500 mb-6"
                    >
                        <p className="text-green-800 font-bold">
                            Message sent successfully! I&apos;ll get back to you
                            soon.
                        </p>
                    </motion.div>
                ) : null}

                {status.error ? (
                    <motion.div
                        variants={fadeUp}
                        className="p-4 bg-red-100 border-2 border-red-500 mb-6"
                    >
                        <p className="text-red-800 font-bold">{status.error}</p>
                    </motion.div>
                ) : null}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={fadeUp} className="space-y-2">
                            <label htmlFor="name" className="text-lg font-bold">
                                Name
                            </label>
                            <input
                                id="name"
                                placeholder="Your Name"
                                className="border-4 border-black p-3 h-auto focus:ring-2 focus:ring-yellow-400 focus:border-black"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>
                        <motion.div variants={fadeUp} className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-lg font-bold"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                className="border-4 border-black p-3 h-auto focus:ring-2 focus:ring-yellow-400 focus:border-black"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>
                    </div>

                    <motion.div variants={fadeUp} className="space-y-2">
                        <label htmlFor="subject" className="text-lg font-bold">
                            Subject
                        </label>
                        <input
                            id="subject"
                            placeholder="Subject"
                            className="border-4 border-black p-3 h-auto focus:ring-2 focus:ring-yellow-400 focus:border-black"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </motion.div>

                    <motion.div variants={fadeUp} className="space-y-2">
                        <label htmlFor="message" className="text-lg font-bold">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Your Message"
                            rows={6}
                            className="border-4 border-black p-3 focus:ring-2 focus:ring-yellow-400 focus:border-black"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <button
                            type="submit"
                            className="bg-black cursor-pointer text-white border-4 border-black hover:bg-white hover:text-black text-lg px-8 py-4 h-auto rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all w-full md:w-auto"
                            disabled={status.loading}
                        >
                            {status.loading ? "Sending..." : "Send Message"}
                        </button>
                    </motion.div>
                </form>
            </motion.div>
        </motion.div>
    );
}
