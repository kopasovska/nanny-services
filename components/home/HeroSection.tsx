import Image from "next/image";
import Link from "next/link";
import StatsBar from "./StatsBar";

const HeroSection = () => {
    return (
        <section className="relative w-full max-w-[375px] md:max-w-480 mx-auto flex flex-col flex-1 flex-wrap rounded-[30px] bg-primary overflow-hidden">
            <div className="relative z-1 md:w-1/2 flex flex-col flex-1 justify-center flex-wrap p-8 lg:pt-22 md:px-16 2xl:px-24 text-secondary">
                <h1 className="text-title text-[28px] md:text-[32px] lg:text-[46px] xl:text-[54px] 2xl:text-[70px] mb-4 md:mb-7">
                    Make Life Easier <br />
                    for the Family:
                </h1>
                <h2 className="text-subtitle text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] mb-10 md:mb-12 lg:mb-16">
                    Find Babysitters Online for All Occasions
                </h2>
                <Link
                    href="/nannies"
                    className="group w-52 py-3.5 lg:w-57.5 lg:py-4.5 flex justify-center items-center outline-none border border-secondary/40 rounded-[30px] font-medium lg:text-[20px] leading-[120%] tracking-[-0.01em] text-secondary hover:bg-secondary hover:text-primary transition duration-700 ease-in-out"
                >
                    Get Started
                    <svg className="w-4 h-4 lg:w-6 lg:h-6 ml-4 fill-current group-hover:rotate-45">
                        <use href="/sprite.svg#icon-arrow" />
                    </svg>
                </Link>
            </div>
            <div className="relative h-64 md:absolute md:inset-y-0 md:-right-12 md:left-1/2 md:h-auto z-0">
                <Image
                    src="/hero-nanny.jpg"
                    alt="Nanny with a child"
                    fill
                    className="object-cover"
                />
            </div>
            <StatsBar />
        </section>
    );
};

export default HeroSection;
