import Header from "@/components/layout/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import MobileHeader from "@/components/layout/MobileHeader";
import MobileMenuModal from "@/components/modals/MobileMenuModal";

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
            <body className={inter.variable}>
                <MobileHeader />
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
