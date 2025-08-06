import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    if (req.method === "POST") {
        const { name, email, message } = await req.json();

        if (!email || !message || !name) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.GMAIL_PASS,
                },
            });

            const mailOptions = {
                from: email,
                to: process.env.GMAIL_USER,
                subject: `Contact from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            };

            await transporter.sendMail(mailOptions);

            return NextResponse.json(
                { message: "Email sent successfully" },
                { status: 200 }
            );
        } catch (error) {
            console.error(error);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }
    } else {
        return NextResponse.json(
            { error: "Method not allowed" },
            { status: 405 }
        );
    }
}