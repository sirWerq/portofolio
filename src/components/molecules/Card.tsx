import Image from "next/image";
import Link from "next/link";

export default function Card({
    image,
    title,
    description,
    href,
    techStack,
    role,
}: {
    image: string;
    title: string;
    description: string;
    href: string;
    techStack: string[];
    role: string;
}) {
    return (
        <Link
            href={href}
            className="border w-[350px] min-h-[350px] rounded-lg p-4 custom-effect flex gap-2 items-center relative"
            target="_blank"
        >
            <div className="flex flex-col gap-2 items-center w-full h-full">
                <Image
                    src={image}
                    alt={title}
                    width={133}
                    height={133}
                    className="rounded"
                />
                <div className="w-full space-y-2">
                    <h3 className="font-semibold text-xl">{title}</h3>
                    <p className="text-sm text-slate-600">{description}</p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                        {techStack.map((tech, index) => (
                            <div
                                className="min-w-12 flex items-center justify-center px-2 border border-r-4 border-b-4"
                                key={index}
                            >
                                <p>{tech}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex items-center justify-center px-2 border border-r-4 border-b-4">
                        <p>{role}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
