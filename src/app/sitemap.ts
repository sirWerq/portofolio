import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/works`,
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
            priority: 0.5,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
            priority: 0.5,
        },
    ];
}
