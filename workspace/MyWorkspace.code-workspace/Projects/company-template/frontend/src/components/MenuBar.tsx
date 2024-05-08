"use client";

import MenuBarLink from "./MenuBarLink";
import { usePathname } from "next/navigation";
import MenuButton from "./MenuButton";

export default function Menu() {
    const pathName = usePathname();
    const segments = pathName.split("/");

    const menuLink = [
        { name: "Home", url: `/${segments[1]}` },
        { name: "About Us", url: `/${segments[1]}/about` },
        { name: "Our Team", url: `/${segments[1]}/team` },
        { name: "Blog", url: `/${segments[1]}/blog` },
        { name: "Contact Us", url: `/${segments[1]}/contact` },
    ];

    return (
        <>
            <div className="-3xl xl:pl-P6 xl:gap-8 py-4 md:py-8 flex">
                {menuLink.map((item) => (
                    <div
                        key={item.name}
                        className="text-sm font-medium text-primary uppercase max-xl:hidden flex items-center gap-2"
                    >
                        <MenuBarLink active={pathName === item.url} link={item.url}>
                            {item.name}
                        </MenuBarLink>
                    </div>
                ))}
                <MenuButton />
            </div>
        </>
    );
}
