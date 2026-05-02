import NavLink from "../layout/NavLink";

interface MobileMenuModalProps {
    setIsOpen: (val: boolean) => void;
}

const MobileMenuModal = ({ setIsOpen }: MobileMenuModalProps) => {
    return (
        <div className="fixed inset-0 z-50 w-screen h-screen py-12 flex flex-col gap-4 justify-between items-center bg-primary text-secondary">
            <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 active:rotate-180 transition duration-700 ease-in-out"
            >
                <svg className="w-6 h-6 stroke-secondary">
                    <use href="/sprite.svg#icon-close" />
                </svg>
            </button>
            <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-[10px] bg-secondary flex justify-center items-center">
                    <svg className="w-4 h-4 fill-primary">
                        <use href="/sprite.svg#icon-profile" />
                    </svg>
                </div>
                <p>Username</p>
            </div>
            <nav>
                <ul className="flex flex-col gap-8 items-center text-body-sm">
                    <li>
                        <NavLink href="/" onClick={() => setIsOpen(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            href="/nannies"
                            onClick={() => setIsOpen(false)}
                        >
                            Nannies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            href="/favorites"
                            onClick={() => setIsOpen(false)}
                        >
                            Favorites
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button className="w-33.5 h-12 border border-[rgba(251,251,251,0.4)] rounded-[30px] hover:bg-secondary hover:text-primary transition duration-700 ease-in-out">
                Log out
            </button>
        </div>
    );
};

export default MobileMenuModal;
