import { techStackPattern } from "@/patterns";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Works",
    description:
        "Explore the technologies I use, my work experiences, my Education experiences, and a selection of projects I've built.",
};

export default function Works() {
    return (
        <div className="px-2 md:px-16 pt-20 space-y-2 lg:space-y-6">
            <div className="space-y-1 lg:space-y-2">
                <h1 className="font-semibold text-2xl flex items-center h-[54px]">
                    My Works
                </h1>
                <p className="text-sm">
                    Explore the technologies I use, my work experiences, my
                    Education experiences, and a selection of projects I&apos;ve
                    built.
                </p>
            </div>
            <div className="space-y-1 lg:space-y-2">
                <h2 className="font-semibold text-2xl">Tech Stack</h2>
                <div className="flex gap-8 flex-wrap items-center justify-start">
                    {techStackPattern.map((item) => (
                        <Link
                            className="custom-effect w-20 flex p-4 items-center justify-center rounded-lg"
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <item.icon className="w-10 h-10" />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="space-y-1 lg:space-y-2">
                <h2 className="font-semibold text-2xl">Work Experiences</h2>
                <p className="text-sm">Coming soon...</p>
            </div>
            <div className="space-y-1 lg:space-y-2">
                <h2 className="font-semibold text-2xl">
                    Education Experiences
                </h2>
                <p className="text-sm">Coming soon...</p>
            </div>
            <div className="space-y-1 lg:space-y-2">
                <h2 className="font-semibold text-2xl">Projects</h2>
                <p className="text-sm">Coming soon...</p>
            </div>
        </div>
    );
}
