import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs",
    description:
        "Explore my thoughts, ideas, and experiences through my blog posts.",
};

export default function Blogs() {
    return (
        <div className="px-2 md:px-16 pt-20 space-y-2 lg:space-y-6 min-h-svh">
            <div className="space-y-1 lg:space-y-2">
                <h1 className="font-semibold text-2xl flex items-center h-[54px]">
                    My Blogs
                </h1>
                <p className="text-sm">
                    Blog content is currently unavailable. Please check back
                    later for the latest updates and insights.
                </p>
            </div>
        </div>
    );
}
