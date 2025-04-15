import Image from "next/image";
import Link from "next/link";

export default function RectangleCard({
    image,
    title,
    description,
    href,
    date,
}: {
    image: string;
    title: string;
    description: string;
    href: string;
    date: string;
}) {
    return (
        <Link
            href={href}
            className="border w-full max-w-[350px] md:max-w-[580px] h-[200px] rounded-lg p-4 custom-effect flex gap-2 items-center relative"
            target="_blank"
        >
            <div className="absolute top-3 right-2 text-slate-400 text-xs">
                <span>{date}</span>
            </div>
            <Image
                src={image}
                alt={title}
                width={133}
                height={133}
                className="rounded"
            />
            <div className="w-full">
                <h3 className="font-semibold text-xl">{title}</h3>
                <p className="text-sm text-slate-600">{description}</p>
            </div>
        </Link>
    );
}
