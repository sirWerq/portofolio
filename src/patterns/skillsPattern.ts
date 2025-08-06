import {
    RiNextjsFill,
    RiReactjsLine,
    RiTailwindCssFill,
    RiBootstrapFill,
} from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { SiExpress, SiJavascript, SiMysql, SiNodedotjs, SiPostgresql, SiSupabase, SiTypescript, SiMongodb, SiCloudflare, SiNginx } from "react-icons/si";
import { TechStack } from "@/models/global";


const techStack: TechStack[] = [
    {
        id: 1,
        icon: RiNextjsFill,
        name: "Next.js",
        href: "https://nextjs.org/",
    },
    {
        id: 2,
        icon: RiReactjsLine,
        name: "React.js",
        href: "https://react.dev/",
    },
    {
        id: 3,
        icon: RiTailwindCssFill,
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
    },
    {
        id: 4,
        icon: RiBootstrapFill,
        name: "Bootstrap",
        href: "https://getbootstrap.com/",
    },
    {
        id: 5,
        icon: TbBrandVite,
        name: "Vite.js",
        href: "https://vitejs.dev/",
    },
    {
        id: 6,
        icon: SiJavascript,
        name: "JavaScript",
        href: "https://www.javascript.com/",
    },
    {
        id: 7,
        icon: SiTypescript,
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
    },
    {
        id: 8,
        icon: SiNodedotjs,
        name: "Node.js",
        href: "https://nodejs.org/",
    },
    {
        id: 9,
        icon: SiExpress,
        name: "Express.js",
        href: "https://expressjs.com/",
    },
    {
        id: 10,
        icon: SiMysql,
        name: "MySQL",
        href: "https://www.mysql.com/",
    },
    {
        id: 11,
        icon: SiPostgresql,
        name: "PostgreSQL",
        href: "https://www.postgresql.org/",
    },
    {
        id: 12,
        icon: SiSupabase,
        name: "Supabase",
        href: "https://supabase.com/",
    },
    {
        id: 13,
        icon: SiMongodb,
        name: "MongoDB",
        href: "https://www.mongodb.com/",
    },
    {
      id: 14,
      icon: SiCloudflare,
      name: "Cloudflare",
      href: "https://www.cloudflare.com/",
    },
    {
        id: 15,
        icon: SiNginx,
        name: "Nginx",
        href: "https://www.nginx.com/",
    },
];

export default techStack;