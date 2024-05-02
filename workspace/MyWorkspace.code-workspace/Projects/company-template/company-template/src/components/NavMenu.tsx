"use client";
import { useMenu } from "@/context/useContextMenu";
import { useScreenBreakPoint } from "@/context/useContextScreenBreakPoints";
import { usePathname } from "next/navigation";

export default function NavMenu() {
    const { isMenuOpen, closeMenu } = useMenu();
    const { smallDisplay } = useScreenBreakPoint();

    const menuLinks = [
        { text: "Home", url: "/" },
        { text: "Artists", url: "/artists" },
        { text: "Contact", url: "/contact" },
        { text: "Menu", url: "/menu" },
        { text: "Blog", url: "/blog" },
    ];

    return (
        <nav
            className={`nav-menu h-screen w-full bg-foreground transition-all duration-300 z-50 fixed   
            ${
                isMenuOpen
                    ? "visible opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-[100%] delay-1000"
            }`}
        ></nav>
    );
}
