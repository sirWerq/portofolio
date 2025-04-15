import Image from "next/image";
import Link from "next/link";

export default function Arrow({ href }: { href: string }) {
    return (
        <Link href={href}>
            <Image
                src={"/arrow.svg"}
                alt="arrow"
                width={40}
                height={40}
                className="cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5"
            />
        </Link>
    );
}
