import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Garvik India - Premium Creative Agency";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0a0a0a",
                    backgroundImage: "radial-gradient(circle at 25% 25%, rgba(145, 38, 143, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)",
                }}
            >
                {/* Logo/Brand Mark */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 40,
                    }}
                >
                    <div
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #91268F 0%, #D4AF37 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 60,
                            fontWeight: 900,
                            color: "white",
                        }}
                    >
                        G
                    </div>
                </div>

                {/* Title */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 900,
                            color: "white",
                            textTransform: "uppercase",
                            letterSpacing: "-0.02em",
                            marginBottom: 8,
                        }}
                    >
                        GARVIK INDIA
                    </div>
                    <div
                        style={{
                            fontSize: 28,
                            fontWeight: 600,
                            background: "linear-gradient(90deg, #D4AF37 0%, #F5E6A3 50%, #D4AF37 100%)",
                            backgroundClip: "text",
                            color: "transparent",
                            textTransform: "uppercase",
                            letterSpacing: "0.3em",
                        }}
                    >
                        Premium Creative Agency
                    </div>
                </div>

                {/* Tagline */}
                <div
                    style={{
                        marginTop: 40,
                        fontSize: 24,
                        color: "rgba(255, 255, 255, 0.7)",
                        textAlign: "center",
                        maxWidth: 800,
                    }}
                >
                    Where cinematic vision meets data-driven success
                </div>

                {/* Bottom Bar */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 8,
                        background: "linear-gradient(90deg, #91268F 0%, #D4AF37 100%)",
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
