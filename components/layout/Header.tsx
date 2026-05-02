import Link from "next/link";
import NavLink from "./NavLink";

const Header = () => {
    return (
        <header className="hidden lg:flex justify-between items-center h-22 px-32 py-5 bg-primary border border-foreground text-secondary">
            <Link
                href="/"
                className="text-2xl font-medium leading-[117%] tracking-[0.02em]"
            >
                Nanny.Services
            </Link>
            <nav>
                <ul className="flex gap-10 text-body-sm">
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="/nannies">Nannies</NavLink>
                    </li>
                    <li>
                        <NavLink href="/favorites">Favorites</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-6 items-center">
                <div className="hidden xl:flex gap-3.5 items-center ">
                    <div className="w-10 h-10 rounded-[10px] bg-secondary flex justify-center items-center">
                        <svg className="w-4 h-4 fill-primary">
                            <use href="/sprite.svg#icon-profile" />
                        </svg>
                    </div>
                    <p>Username</p>
                </div>
                <button className="w-33.5 h-12 border border-[rgba(251,251,251,0.4)] rounded-[30px] hover:bg-secondary hover:text-primary transition duration-700 ease-in-out">
                    Log out
                </button>
            </div>
        </header>
    );
};

export default Header;
