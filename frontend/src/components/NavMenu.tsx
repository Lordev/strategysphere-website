"use client";
import { useMenu } from "@/context/useContextMenu";
import { usePathname } from "next/navigation";
import NavMenuContainer from "./NavMenuContainer";
import NavMenuLink from "./NavMenuLink";

export default function NavMenu() {
    const { isMenuOpen, closeMenu } = useMenu();
    const pathName = usePathname();
    const segments = pathName.split("/");

    const menuLinks = [
        { text: "Home", url: `/${segments[1]}` },
        { text: "About Us", url: `/${segments[1]}/about` },
        { text: "Our Team", url: `/${segments[1]}/team` },
        { text: "Blog", url: `/${segments[1]}/blog` },
        { text: "Contact Us", url: `/${segments[1]}/contact` },
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
