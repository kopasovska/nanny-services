"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
    isLoggedIn?: boolean;
    showIndicator?: boolean;
    onClick?: () => void;
}

const links = [
    { href: "/", label: "Home" },
    { href: "/nannies", label: "Nannies" },
];

const privateLinks = [{ href: "/favorites", label: "Favorites" }];

const NavLinks = ({
    isLoggedIn = false,
    showIndicator = false,
    onClick,
}: NavLinksProps) => {
    const pathname = usePathname();
    const allLinks = isLoggedIn ? [...links, ...privateLinks] : links;
    return (
        <nav>
            <ul className="flex gap-10 text-body-sm">
                {allLinks.map(({ href, label }) => {
                    const isActive = pathname === href;

                    return (
                        <li key={href}>
                            <Link
                                href={href}
                                onClick={onClick}
                                className={
                                    isActive && showIndicator
                                        ? "relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:rounded-full after:bg-secondary"
                                        : ""
                                }
                            >
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavLinks;
