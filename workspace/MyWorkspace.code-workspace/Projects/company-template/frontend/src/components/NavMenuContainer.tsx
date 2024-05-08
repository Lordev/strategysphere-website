"use client";
import { useMenu } from "@/context/useContextMenu";
import { Icon } from "@iconify/react/dist/iconify.js";
import { PropsWithChildren } from "react";

export default function NavMenuContainer({ children }: PropsWithChildren) {
    const { isMenuOpen, closeMenu } = useMenu();

    return (
        <nav
            className={`nav-menu h-screen bg-center bg-cover bg-no-repeat w-full bg-background-menu transition-all duration-300 z-[999] fixed   
${
    isMenuOpen
        ? "visible opacity-100 translate-x-0"
        : "opacity-0 -translate-x-[100%] delay-1000"
}`}
        >
            <div className="flex justify-center items-center h-full relative">
                <Icon
                    icon={"material-symbols:close"}
                    width={50}
                    height={50}
                    onClick={isMenuOpen ? closeMenu : undefined}
                    className="text-foreground absolute right-6 top-6 opacity-100 z-50 w-[35px] lg:w-[45px] cursor-pointer"
                />
                {children}
            </div>
        </nav>
    );
}
