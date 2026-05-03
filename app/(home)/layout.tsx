import BurgerMenu from "@/components/navigation/BurgerMenu";
import HeroHeader from "@/components/navigation/HeroHeader";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative flex flex-col min-h-screen overflow-auto">
            <BurgerMenu />
            <HeroHeader />
            <main className="w-full lg:min-h-screen flex flex-1 p-4 md:p-8">
                {children}
            </main>
        </div>
    );
}
