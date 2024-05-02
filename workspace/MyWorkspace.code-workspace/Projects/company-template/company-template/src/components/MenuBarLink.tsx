"use client";

import Link from "next/link";
import { PropsWithChildren, useState } from "react";

interface NavMenuItemProps extends PropsWithChildren {
    link: string;
    active: boolean;
}

export default function NavMenuItem({ link, active, children }: NavMenuItemProps) {
    const [hovered, setHovered] = useState(false);

    const handleHoverEnter = () => {
        return setHovered(true);
    };
    const handleHoverLeave = () => {
        return setHovered(false);
    };

    const menuLine =
        "h-[.1px] w-8 relative bg-accent before:bg-foreground before:inset-0 before:absolute z-10 before:transition-transform before:duration-700 before:w-full before:h-full -before:z-20";

    return (
        <>
            <span
                className={`${menuLine} ${
                    hovered || active ? "before:translate-x-16" : "before:translate-x-0"
                }`}
            ></span>
            <Link
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                href={link}
                className="z-30"
            >
                {children}
            </Link>
        </>
    );
}
