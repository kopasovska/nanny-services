import Header from "@/components/layout/Header";
import MobileHeader from "@/components/layout/MobileHeader";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <MobileHeader />
            <Header />
            <main>{children}</main>
        </>
    );
}
