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

export const slideInLeft: Variants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 30,
            stiffness: 200,
        },
    },
};
