"use client";

import { useForm, SubmitHandler } from "react-hook-form"
import Image from "next/image";
import { FormData } from "@/models/global";
import formService from "@/services/formService";
import { useState } from "react";

export default function Form() {
        const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<FormData>()

      const [loading, setLoading] = useState<boolean>(false)
    
      const onSubmit: SubmitHandler<FormData> = async (data) => {
        formService(data, reset, setLoading)
      };

    return (
        <form className="bg-[#DEE8CE] shadow-[_-8px_0_0_0_black,_8px_0_0_0_black,_0_-8px_0_0_black,_0_8px_0_0_black] p-4 sm:p-6 w-full max-w-[1050px] mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16 relative">
                <div className="flex-1 space-y-4">
                    <div className="w-full">
                        <label htmlFor="name" className="block font-medium mb-2 text-sm sm:text-base">name</label>
                        <input
                        id="name"
                        type="text"
                        className="w-full outline-none border-t border-l border-r-4 border-b-4 border-black p-2 text-sm sm:text-base"
                        placeholder="Your Name..."
                        {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <span className="text-red-500 text-xs sm:text-sm block mt-1">{errors.name.message}</span>}
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block font-medium mb-2 text-sm sm:text-base">email</label>
                        <input
                        id="email"
                        type="email"
                        className="w-full outline-none border-t border-l border-r-4 border-b-4 border-black p-2 text-sm sm:text-base"
                        placeholder="Your Email..."
                        {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <span className="text-red-500 text-xs sm:text-sm block mt-1">{errors.email.message}</span>}
                    </div>
                </div>
                
                <div className="flex-col items-center lg:items-end gap-4 lg:mt-10 hidden lg:flex">
                    <button 
                        type="submit"
                        className="bg-[#818F7C] text-white border-t border-l border-r-4 border-b-4 border-black w-full sm:w-32 h-14 cursor-pointer hover:bg-[#727E6D] transition-colors duration-200 text-sm sm:text-base lg:mt-8 lg:mr-24"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                    <Image 
                        src="/ghost.svg" 
                        alt="ghost-icon" 
                        width={60} 
                        height={60} 
                        className="lg:absolute lg:top-0 lg:right-0 lg:w-[75px] lg:h-[75px]" 
                    />
                </div>
            </div>
            
            <div className="mt-6">
                <label htmlFor="message" className="block font-medium mb-2 text-sm sm:text-base">Message</label>
                <textarea
                id="message"
                className="w-full h-48 sm:h-64 lg:h-96 outline-none border-t border-l border-r-4 border-b-4 border-black p-2 resize-none text-sm sm:text-base"
                placeholder="Your Message..."
                {...register("message", { required: "Message is required" })}
                />
                {errors.message && <span className="text-red-500 text-xs sm:text-sm block mt-1">{errors.message.message}</span>}
            </div>
            <button 
                type="submit"
                className="bg-[#818F7C] lg:hidden text-white border-t border-l border-r-4 border-b-4 border-black w-full sm:w-32 h-14 cursor-pointer hover:bg-[#727E6D] transition-colors duration-200 text-sm sm:text-base lg:mt-8 lg:mr-24"
                disabled={loading}
            >
                {loading ? "Submitting..." : "Submit"}
            </button>
        </form>
    )
}