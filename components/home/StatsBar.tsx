const StatsBar = () => {
    return (
        <div className="absolute bottom-4 right-4 md:bottom-12.5 md:right-12.5 p-4 lg:p-8 flex self-start gap-4 justify-center bg-secondary/70 md:bg-secondary rounded-[20px]">
            <div className="w-13.5 md:h-13.5 flex justify-center items-center bg-primary rounded-xl">
                <svg className="w-5 h-4 fill-secondary">
                    <use href="/sprite.svg#icon-check" />
                </svg>
            </div>
            <div className="flex flex-col gap-1 md:gap-1.5">
                <p className="text-body-sm text-foreground-muted">
                    Experienced nannies
                </p>
                <p className="text-2xl font-bold text-foreground">15,000</p>
            </div>
        </div>
    );
};

export default StatsBar;
