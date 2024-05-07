"use client";
import { useMenu } from "@/context/useContextMenu";
import { usePathname } from "next/navigation";
import NavMenuContainer from "./NavMenuContainer";
import NavMenuLink from "./NavMenuLink";

export default function NavMenu() {
    const { isMenuOpen, closeMenu } = useMenu();
    const pathName = usePathname();

    const menuLinks = [
        { text: "Home", url: "/" },
        { text: "About Us", url: "/about" },
        { text: "Our Team", url: "/team" },
        { text: "Contact Us", url: "/contact" },
    ];

    return (
        <NavMenuContainer>
            <ul className={`lg:ml-4 ml-0 2xl:ml-20 lg:py-24 text-center grid gap-8`}>
                {menuLinks.map((link, index) => (
                    <li key={index} className="lg:pt-0">
                        <NavMenuLink
                            active={pathName === link.url}
                            href={link.url}
                            onClick={isMenuOpen ? closeMenu : undefined}
                        >
                            {link.text}
                        </NavMenuLink>
                    </li>
                ))}
            </ul>
        </NavMenuContainer>
    );
}
