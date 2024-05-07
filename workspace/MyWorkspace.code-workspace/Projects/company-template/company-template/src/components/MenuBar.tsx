"use client";

import MenuBarLink from "./MenuBarLink";
import { usePathname } from "next/navigation";
import MenuButton from "./MenuButton";

export default function Menu() {
    const pathName = usePathname();

    const menuLink = [
        { path: "/", name: "Home" },
        { path: "/about", name: "About us" },
        { path: "/team", name: "Our Team" },
        { path: "/contact", name: "Contact Us" },
    ];

    return (
        <>
            <div className="-3xl xl:pl-P6 xl:gap-8 py-4 md:py-8 flex">
                {menuLink.map((item) => (
                    <div
                        key={item.name}
                        className="text-sm font-[500] text-primary uppercase max-xl:hidden flex items-center gap-2"
                    >
                        <MenuBarLink active={pathName === item.path} link={item.path}>
                            {item.name}
                        </MenuBarLink>
                    </div>
                ))}
                <MenuButton />
            </div>
        </>
    );
}
