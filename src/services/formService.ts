import { FormData } from "@/models/global";
import { UseFormReset } from "react-hook-form";
import { Alert } from "@/components";

export default async function formService(data: FormData, reset: UseFormReset<FormData>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
    try {
        setLoading(true);
        const response = await fetch("api/mail", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        Alert(
            "Success",
            "Your message has been sent successfully!",
            "success"
        );
        reset();
    } catch (error) {
        console.error("Error:", error);
        Alert(
            "Error",
            "There was an error sending your message. Please try again later.",
            "error"
        );
    } finally {
        setLoading(true);
    }
}