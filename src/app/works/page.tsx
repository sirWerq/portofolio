import { Card, RectangleCard } from "@/components/molecules";
import { techStackPattern } from "@/patterns";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Works",
    description:
        "Explore the technologies I use, my work experiences, my Education experiences, and a selection of projects I've built.",
};

interface Experience {
    id: number;
    title: string;
    description: string;
    date: string;
    image: string;
    href: string;
}

interface Project {
    id: number;
    image: string;
    title: string;
    description: string;
}

const worksExperiences: Experience[] = [
    {
        id: 1,
        title: "Mega Kreasi Tech",
        description: "Front-End Web Developer Intern",
        date: "January 2025 - March 2025",
        image: "/mkt.svg",
        href: "https://megakreasitech.com/",
    },
];

const educationsExperiences: Experience[] = [
    {
        id: 1,
        title: "Indraprasta PGRI University",
        description: "Bachelor of Computer Science",
        date: "Juny 2022 - Present",
        image: "/unindra.svg",
        href: "https://unindra.ac.id",
    },
    {
        id: 2,
        title: "Bangkit Academy",
        description: "Cloud Computing Cohort",
        date: "September 2024 - December 2024",
        image: "/bangkit.svg",
        href: "https://grow.google/intl/id_id/bangkit/?tab=machine-learning",
    },
];

const projects: Project[] = [
    {
        id: 1,
        image: "/portomaker.svg",
        title: "Porto Maker",
        description:
            "A trusted platform offering professionally designed templates to showcase your work attractively and effectively. We believe your unique journey and achievements deserve recognition and appreciation.",
    },
];

export default function Works() {
    return (
        <div className="px-2 md:px-16 pt-20 space-y-2 lg:space-y-6 min-h-svh">
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
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center">
                    {worksExperiences.length > 0 ? (
                        worksExperiences.map((experience) => (
                            <RectangleCard
                                key={experience.id}
                                title={experience.title}
                                description={experience.description}
                                date={experience.date}
                                image={experience.image}
                                href={experience.href}
                            />
                        ))
                    ) : (
                        <p className="text-sm">Coming soon...</p>
                    )}
                </div>
            </div>
            <div className="space-y-1 lg:space-y-2">
                <h2 className="font-semibold text-2xl">
                    Education Experiences
                </h2>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center">
                    {educationsExperiences.length > 0 ? (
                        educationsExperiences.map((education) => (
                            <RectangleCard
                                key={education.id}
                                title={education.title}
                                description={education.description}
                                date={education.date}
                                image={education.image}
                                href={education.href}
                            />
                        ))
                    ) : (
                        <p className="text-sm">Coming soon...</p>
                    )}
                </div>
            </div>
            <div className="space-y-1 lg:space-y-2">
                <h2 className="font-semibold text-2xl">Projects (Details)</h2>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <Card
                                key={project.id}
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                href={`works/${project.id}`}
                                target="_self"
                            />
                        ))
                    ) : (
                        <p className="text-sm">Coming soon...</p>
                    )}
                </div>
            </div>
        </div>
    );
}
