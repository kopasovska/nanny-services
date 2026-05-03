import Link from "next/link";
import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";

const Header = () => {
    return (
        <header className="hidden lg:flex justify-between items-center h-22 px-32 py-5 bg-primary border border-foreground text-secondary">
            <Link
                href="/"
                className="text-2xl font-medium leading-[117%] tracking-[0.02em]"
            >
                Nanny.Services
            </Link>
            <NavLinks showIndicator isLoggedIn />
            <AuthButtons isLoggedIn />
        </header>
    );
};

export default Header;
