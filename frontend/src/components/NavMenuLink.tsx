import Link, { LinkProps } from "next/link";
import { PropsWithChildren, useState } from "react";

interface NavMenuItemProps extends PropsWithChildren<LinkProps> {
    active: boolean;
}

export default function NavMenuItem({
    active,
    children,
    ...LinkProps
}: NavMenuItemProps) {
    const [hovered, setHovered] = useState(false);

    const handleHoverEnter = () => {
        return setHovered(true);
    };
    const handleHoverLeave = () => {
        return setHovered(false);
    };

    return (
        <>
            <Link
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                className={`text-xl lg:text-3xl 2xl:text-5xl uppercase ${
                    active || hovered ? "text-accent" : "text-foreground"
                }`}
                {...LinkProps}
            >
                {children}
            </Link>
        </>
    );
}
