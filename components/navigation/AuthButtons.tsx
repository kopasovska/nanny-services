import { cn } from "@/lib/utils";

interface AuthButtonsProps {
    isLoggedIn: boolean;
    variant?: "default" | "modal";
}

const AuthButtons = ({ isLoggedIn, variant }: AuthButtonsProps) => {
    if (isLoggedIn) {
        return (
            <div
                className={
                    variant === "modal"
                        ? "w-full flex flex-col gap-4 items-center"
                        : "flex gap-6 items-center"
                }
            >
                <div className="flex gap-3.5 items-center ">
                    <div className="w-10 h-10 rounded-[10px] bg-secondary flex justify-center items-center">
                        <svg className="w-4 h-4 fill-primary">
                            <use href="/sprite.svg#icon-profile" />
                        </svg>
                    </div>
                    <p>Username</p>
                </div>
                <button
                    className={cn(
                        "h-12 px-10 border border-secondary/40 rounded-[30px] hover:bg-secondary hover:text-primary transition duration-700 ease-in-out",
                        variant === "modal" ? "w-full" : "",
                    )}
                >
                    Log out
                </button>
            </div>
        );
    } else {
        return (
            <div
                className={
                    variant === "modal"
                        ? "w-full flex flex-col gap-2"
                        : "flex gap-2 items-center"
                }
            >
                <button className="h-12 px-10 border border-secondary/40 rounded-[30px] hover:bg-secondary hover:text-primary transition duration-700 ease-in-out">
                    Log in
                </button>
                <button
                    className={cn(
                        "h-12 px-10 rounded-[30px] transition duration-700 ease-in-out",
                        variant === "modal"
                            ? "bg-secondary text-primary"
                            : "bg-primary text-secondary hover:bg-secondary hover:text-primary",
                    )}
                >
                    Registration
                </button>
            </div>
        );
    }
};

export default AuthButtons;
