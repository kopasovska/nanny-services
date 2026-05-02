"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    onClick?: () => void;
    children: React.ReactNode;
}
const NavLink = ({ href, onClick, children }: NavLinkProps) => {
    const pathname = usePathname();
    const isAtive = pathname === href;
    return (
        <Link
            href={href}
            onClick={onClick ?? undefined}
            className={
                isAtive
                    ? "relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:rounded-full after:bg-secondary"
                    : ""
            }
        >
            {children}
        </Link>
    );
};

export default NavLink;
