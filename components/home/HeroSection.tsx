import Image from "next/image";
import Link from "next/link";
import NavLink from "../layout/NavLink";
import StatsBar from "./StatsBar";

const HeroSection = () => {
    return (
        <div className="relative w-full max-w-480 mx-auto flex flex-col flex-1 rounded-[30px] bg-primary overflow-hidden">
            <div className="absolute inset-y-0 -right-12 left-1/2 z-0">
                <Image
                    src="/hero-nanny.jpg"
                    alt="Nanny with a child"
                    fill
                    className="object-cover"
                />
            </div>
            {/* Header */}
            <div className="relative z-1">
                <div className="flex justify-between items-center h-22 px-24 py-5 border-b border-b-secondary/40 text-secondary">
                    <Link
                        href="/"
                        className="text-2xl font-medium leading-[117%] tracking-[0.02em]"
                    >
                        Nanny.Services
                    </Link>
                    <div className="flex gap-23 items-center">
                        <nav>
                            <ul className="flex gap-10 text-body-sm">
                                <li>
                                    <NavLink href="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/nannies">Nannies</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex gap-2 items-center">
                            <button className="h-12 px-10 border border-secondary/40 rounded-[30px] hover:bg-secondary hover:text-primary transition duration-700 ease-in-out">
                                Log in
                            </button>
                            <button className="h-12 px-10 bg-primary text-secondary rounded-[30px] hover:bg-secondary hover:text-primary transition duration-700 ease-in-out">
                                Registration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="relative z-1 w-1/2 flex flex-col flex-1 justify-center flex-wrap px-24 text-secondary">
                <h1 className="text-title mb-7">
                    Make Life Easier <br />
                    for the Family:
                </h1>
                <h2 className="text-subtitle mb-16">
                    Find Babysitters Online for All Occasions
                </h2>
                <Link
                    href="/nannies"
                    className="group w-57.5 py-4.5 flex justify-center items-center outline-none border border-secondary/40 rounded-[30px] font-medium text-[20px] leading-[120%] tracking-[-0.01em] text-secondary hover:bg-secondary hover:text-primary transition duration-700 ease-in-out"
                >
                    Get Started
                    <svg className="w-6 h-6 ml-4 fill-current group-hover:rotate-45">
                        <use href="/sprite.svg#icon-arrow" />
                    </svg>
                </Link>
            </div>
            <StatsBar />
        </div>
    );
};

export default HeroSection;
