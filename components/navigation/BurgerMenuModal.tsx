import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";

interface BurgerMenuModalProps {
    isLoggedIn?: boolean;
    setIsOpen: (val: boolean) => void;
}

const BurgerMenuModal = ({
    isLoggedIn = false,
    setIsOpen,
}: BurgerMenuModalProps) => {
    return (
        <div className="fixed inset-y-0 right-0 z-50 w-screen md:w-1/2 h-screen py-12 flex flex-col gap-4 justify-between items-center bg-primary text-secondary">
            <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 active:rotate-180 transition duration-700 ease-in-out"
            >
                <svg className="w-6 h-6 stroke-secondary">
                    <use href="/sprite.svg#icon-close" />
                </svg>
            </button>
            <NavLinks showIndicator isLoggedIn={isLoggedIn} />
            <AuthButtons isLoggedIn={isLoggedIn} />
        </div>
    );
};

export default BurgerMenuModal;
