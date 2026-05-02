import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: ["400", "500"],
    variable: "--font-inter",
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.variable}>{children}</body>
        </html>
    );
}
