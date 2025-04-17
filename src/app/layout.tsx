import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/templates";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "600"],
});

export const metadata: Metadata = {
    title: {
        default: "Rifqi Alisba Garwita Sutrisno",
        template: "%s | Rifqi Alisba Garwita Sutrisno",
    },
    description:
        "Front-End Web Development Enthusiast | Informatics Engineering Student. Undergraduate student in Informatics Engineering at Indraprasta PGRI University, actively learning and developing skills in front-end web development. Passionate about building responsive and user-friendly web interfaces while exploring cloud technologies. Dedicated to continuous learning and innovation, aiming to contribute to impactful tech solutions and grow in the tech industry.",
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icon.png", type: "image/png" },
        ],
        apple: [{ url: "/apple-icon.png" }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
