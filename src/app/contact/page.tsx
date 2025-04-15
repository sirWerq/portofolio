import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with me through my social media accounts or email.",
};

export default function Contact() {
    return (
        <div className="px-2 md:px-16 pt-20 space-y-2 lg:space-y-6 min-h-svh">
            <div className="space-y-1 lg:space-y-2">
                <h1 className="font-semibold text-2xl flex items-center h-[54px]">
                    Get in Touch
                </h1>
                <p className="text-sm">coming soon...</p>
            </div>
        </div>
    );
}
