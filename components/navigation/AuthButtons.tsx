interface AuthButtonsProps {
    isLoggedIn: boolean;
}

const AuthButtons = ({ isLoggedIn }: AuthButtonsProps) => {
    if (isLoggedIn) {
        return (
            <div className="flex gap-6 items-center">
                <div className="hidden xl:flex gap-3.5 items-center ">
                    <div className="w-10 h-10 rounded-[10px] bg-secondary flex justify-center items-center">
                        <svg className="w-4 h-4 fill-primary">
                            <use href="/sprite.svg#icon-profile" />
                        </svg>
                    </div>
                    <p>Username</p>
                </div>
                <button className="h-12 px-10 border border-secondary/40 rounded-[30px] hover:bg-secondary hover:text-primary transition duration-700 ease-in-out">
                    Log out
                </button>
            </div>
        );
    } else {
        return (
            <div className="flex gap-2 items-center">
                <button className="h-12 px-10 border border-secondary/40 rounded-[30px] hover:bg-secondary hover:text-primary transition duration-700 ease-in-out">
                    Log in
                </button>
                <button className="h-12 px-10 bg-primary text-secondary rounded-[30px] hover:bg-secondary hover:text-primary transition duration-700 ease-in-out">
                    Registration
                </button>
            </div>
        );
    }
};

export default AuthButtons;
