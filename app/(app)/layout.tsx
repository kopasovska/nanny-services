import Header from "@/components/navigation/Header";
import BurgerMenu from "@/components/navigation/BurgerMenu";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <BurgerMenu />
            <Header />
            <main>{children}</main>
        </>
    );
}
