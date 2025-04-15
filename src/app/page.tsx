import { Arrow, RotatingText } from "@/components/atoms";
import Image from "next/image";
import Link from "next/link";

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
    href: string;
}

const experiences: Experience[] = [
    {
        id: 1,
        title: "Mega Kreasi Tech",
        description: "Front-End Web Developer Intern",
        date: "January 2025 - March 2025",
        image: "/mkt.svg",
        href: "https://megakreasitech.com/",
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
        href: "https://portoku.live/",
    },
];

export default function Home() {
    return (
        <div className="px-2 md:px-16 pt-20 space-y-2 lg:space-y-6">
            <div className="space-y-1 lg:space-y-2">
                <h1 className="font-semibold text-lg md:text-xl lg:text-2xl flex items-center gap-2 h-[54px]">
                    <span>Hello, I am</span>
                    <RotatingText
                        texts={[
                            "Rifqi Alisba Garwita Sutrisno",
                            "Software Developer",
                        ]}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-red-600 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg w-72 md:w-96"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{
                            type: "spring",
                            damping: 30,
                            stiffness: 400,
                        }}
                        rotationInterval={2000}
                    />
                </h1>
                <p className="text-sm">
                    Front-End Web Development Enthusiast | Informatics
                    Engineering Student Undergraduate student in Informatics
                    Engineering at Indraprasta PGRI University, actively
                    learning and developing skills in front-end web development.
                    Passionate about building responsive and user-friendly web
                    interfaces. Dedicated to continuous learning and innovation,
                    aiming to contribute to impactful tech solutions and grow in
                    the tech industry.
                </p>
            </div>
            <div className="space-y-1 lg:space-y-2">
                <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
                    Experiences
                </h2>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center w-full">
                    {experiences.map((experience) => (
                        <Link
                            href={experience.href}
                            className="border w-full max-w-[350px] lg:max-w-[580px] h-[200px] rounded-lg p-4 custom-effect flex gap-2 items-center relative"
                            key={experience.id}
                            target="_blank"
                        >
                            <div className="absolute top-3 right-2 text-slate-400 text-xs">
                                <span>{experience.date}</span>
                            </div>
                            <Image
                                src={experience.image}
                                alt={experience.title}
                                width={133}
                                height={133}
                                className="rounded"
                            />
                            <div className="w-full">
                                <h3 className="font-semibold text-xl">
                                    {experience.title}
                                </h3>
                                <p className="text-sm text-slate-600">
                                    {experience.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                    <Arrow href={"/works"} />
                </div>
            </div>
            <div className="space-y-1 lg:space-y-2">
                <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
                    Projects
                </h2>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center">
                    {projects.map((project) => (
                        <Link
                            href={project.href}
                            className="border w-[350px] h-[350px] rounded-lg p-4 custom-effect flex gap-2 items-center relative"
                            key={project.id}
                            target="_blank"
                        >
                            <div className="flex flex-col gap-2 items-center w-full h-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={133}
                                    height={133}
                                    className="rounded"
                                />
                                <div className="w-full">
                                    <h3 className="font-semibold text-xl">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                    <Arrow href={"/works"} />
                </div>
            </div>
        </div>
    );
}
