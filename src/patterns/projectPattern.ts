import { Project } from "@/models/global";

const projects: Project[] = [
    {
        id: 1,
        image: "/portomaker.svg",
        title: "Porto Maker",
        description:
            "A trusted platform offering professionally designed templates to showcase your work attractively and effectively. We believe your unique journey and achievements deserve recognition and appreciation.",
        href: "https://portoku.live/",
        techStack: ["Next.js", "Tailwind CSS", "Vite", "React Js"],
        role: "Front-End Developer",
    },
    {
        id: 2,
        image: "/MeGu.svg",
        title: "MeGu",
        description:
            "A project focused on Japanese vocabulary learning, featuring static quizzes that help users study Japanese from JLPT N5 up to N1 levels. The quizzes and vocabulary lists are designed to support learners in mastering Japanese step by step.",
        href: "https://rifqicodes.icu",
        techStack: ["Express.js", "Supabase", "Nginx", "Droplet DigitalOcean", "Cloudflare"],
        role: "Back-End Developer & DevOps",
    },
    {
        id: 3,
        image: "/jikananimelist.svg",
        title: "Jikan Anime List",
        description:
            "A web application that provides information about anime, manga, and characters using the Jikan API.",
        href: "https://jikananimelist.vercel.app/",
        techStack: ["Vite", "React Js", "Tailwind CSS", "Shadcn UI"],
        role: "Front-End Developer",
    }
];


export default projects;