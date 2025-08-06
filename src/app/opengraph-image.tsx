import { ImageResponse } from "next/og";

export const alt =
    "Rifqi Alisba Garwita Sutrisno - Front-End Developer | Informatics Engineering Student";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px",
                }}
            >
                <div
                    style={{
                        fontSize: 64,
                        color: "black",
                    }}
                >
                    Rifqi Alisba Garwita Sutrisno
                </div>
                <div
                    style={{
                        marginTop: 20,
                        fontSize: 28,
                        color: "#111111",
                    }}
                >
                    Software Engineer | Informatics Engineering Student
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}