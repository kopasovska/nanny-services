"use client";

import { useState } from "react";
import MobileMenuModal from "../modals/MobileMenuModal";

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative flex lg:hidden justify-end items-center h-16 px-4 py-4 bg-primary border border-foreground text-secondary">
            <button
                onClick={() => setIsOpen(true)}
                className="w-10 h-10 rounded-[10px] flex justify-center items-center border border-[rgba(251,251,251,0.4)] active:bg-secondary transition duration-700 ease-in-out"
            >
                <svg className="w-6 h-6 fill-secondary active:fill-primary">
                    <use href="/sprite.svg#icon-burger-menu" />
                </svg>
            </button>
            {isOpen && <MobileMenuModal setIsOpen={setIsOpen} />}
        </header>
    );
};

export default MobileHeader;
