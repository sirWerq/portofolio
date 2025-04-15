"use client";

import { useGlobalHooks } from "@/hooks";
import Link from "next/link";

export default function Navlink({
    href,
    children,
    variant = "",
}: {
    href: string;
    children: React.ReactNode;
    variant: string;
}) {
    const { pathname } = useGlobalHooks();
    return (
        <li>
            <Link
                href={href}
                className={`${
                    pathname === href ? "underline bg-red-600 text-white" : ""
                } p-2 rounded ${variant}`}
            >
                {children}
            </Link>
        </li>
    );
}
