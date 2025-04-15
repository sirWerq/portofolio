import Image from "next/image";
import Link from "next/link";

export default function Card({
    image,
    title,
    description,
    href,
    target = "_blank",
}: {
    image: string;
    title: string;
    description: string;
    href: string;
    target?: string;
}) {
    return (
        <Link
            href={href}
            className="border w-[350px] h-[350px] rounded-lg p-4 custom-effect flex gap-2 items-center relative"
            target={target}
        >
            <div className="flex flex-col gap-2 items-center w-full h-full">
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
            </div>
        </Link>
    );
}
