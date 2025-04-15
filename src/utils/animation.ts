"use client";

import { Variants } from "motion/react";

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 200,
        },
    },
};
