import type { Metadata } from "next";
import { Silkscreen } from "next/font/google";
import "./globals.css";

const silkScreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
    title: {
        default: "Rifqi Alisba Garwita Sutrisno",
        template: "%s | Rifqi Alisba Garwita Sutrisno",
    },
    description:
        "Software Engineer Enthusiast | Informatics Engineering Student. Undergraduate student in Informatics Engineering at Indraprasta PGRI University, actively learning and developing skills in front-end web development. Passionate about building responsive and user-friendly web interfaces while exploring cloud technologies. Dedicated to continuous learning and innovation, aiming to contribute to impactful tech solutions and grow in the tech industry.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${silkScreen.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
