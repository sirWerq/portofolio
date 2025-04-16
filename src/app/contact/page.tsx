import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with me through my social media accounts or email.",
};

export default function Contact() {
    return <ContactClient />;
}
