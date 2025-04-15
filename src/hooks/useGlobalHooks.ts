"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function useGlobalHooks() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return {
        pathname,
        isMenuOpen,
        setIsMenuOpen,
    };
}
