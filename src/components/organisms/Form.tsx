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
        <motion.div variants={slideInLeft} className="max-w-4xl w-full px-4">
            <div className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Send Me a Message
            </div>
            <motion.div
                variants={fadeUp}
                className="bg-white border-4 border-black p-8 md:p-10 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0)] space-y-6"
            >
                {status.success && (
                    <motion.div
                        variants={fadeUp}
                        className="p-4 bg-green-100 border-2 border-green-500 rounded"
                    >
                        <p className="text-green-800 font-semibold text-center">
                            Message sent successfully! I&apos;ll get back to you
                            soon.
                        </p>
                    </motion.div>
                )}

                {status.error && (
                    <motion.div
                        variants={fadeUp}
                        className="p-4 bg-red-100 border-2 border-red-500 rounded"
                    >
                        <p className="text-red-800 font-semibold text-center">
                            {status.error}
                        </p>
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={fadeUp} className="flex flex-col">
                            <label
                                htmlFor="name"
                                className="text-lg font-medium mb-1"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                placeholder="Your Name"
                                className="border-2 border-black p-3 rounded focus:ring-2 focus:ring-yellow-400"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>
                        <motion.div variants={fadeUp} className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="text-lg font-medium mb-1"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                className="border-2 border-black p-3 rounded focus:ring-2 focus:ring-yellow-400"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>
                    </div>

                    <motion.div variants={fadeUp} className="flex flex-col">
                        <label
                            htmlFor="subject"
                            className="text-lg font-medium mb-1"
                        >
                            Subject
                        </label>
                        <input
                            id="subject"
                            placeholder="Subject"
                            className="border-2 border-black p-3 rounded focus:ring-2 focus:ring-yellow-400"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-col">
                        <label
                            htmlFor="message"
                            className="text-lg font-medium mb-1"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Your Message"
                            rows={6}
                            className="border-2 border-black p-3 rounded focus:ring-2 focus:ring-yellow-400"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-center"
                    >
                        <button
                            type="submit"
                            className="bg-yellow-400 text-black font-bold px-8 py-3 border-2 border-black rounded shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition-all duration-150 hover:bg-yellow-300 focus:outline-none disabled:opacity-50"
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
