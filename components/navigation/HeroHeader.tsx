import Link from "next/link";
import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";

const HeroHeader = () => {
    return (
        <header className="hidden lg:block absolute top-0 left-0 z-1 w-full py-8 px-[calc((100vw-1920px)/2)]">
            <div className="grid grid-cols-[32%_68%] xl:grid-cols-2 justify-between items-center h-22 px-24 py-5 border-b border-b-secondary/40 text-secondary">
                <Link
                    href="/"
                    className="text-2xl font-medium leading-[117%] tracking-[0.02em]"
                >
                    Nanny.Services
                </Link>
                <div className="flex justify-between items-center pl-24">
                    <NavLinks />
                    <AuthButtons isLoggedIn={true} />
                </div>
            </div>
        </header>
    );
};

export default HeroHeader;
