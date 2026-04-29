import NavLink from "./NavLink";

const Header = () => {
    return (
        <header className="hidden md:flex justify-between items-center h-22 px-32 py-5 bg-primary border border-foreground text-secondary">
            <p className="text-2xl font-medium leading-[117%] tracking-[0.02em]">
                Nanny.Services
            </p>
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
            <div className="flex gap-6">
                <div>Avatar</div>
                <button>Log out</button>
            </div>
        </header>
    );
};

export default Header;
