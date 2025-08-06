export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface Experience {
    id: number;
    title: string;
    description: string;
    details: string;
    date: string;
}

export interface Project {
    id: number;
    image: string;
    title: string;
    description: string;
    href: string;
    techStack: string[];
    role: string;
}

export interface TechStack {
    id: number;
    icon: React.ElementType;
    name: string;
    href: string;
}