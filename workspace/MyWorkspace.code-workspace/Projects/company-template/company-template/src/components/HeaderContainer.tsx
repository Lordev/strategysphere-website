"use client";
import Image from "next/image";
import { PropsWithChildren, useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import Link from "next/link";
import { useMenu } from "@/context/useContextMenu";
import { useScreenBreakPoint } from "@/context/useContextScreenBreakPoints";
import { IconMenu } from "@/components/Svg/Index";

export default function HeaderContainer({children} : PropsWithChildren) {
    const { smallDisplay } = useScreenBreakPoint();
    const { isMenuOpen, openMenu } = useMenu();
    const [sticky, setSticky] = useState(false);
    const [direction, setDirection] = useState("up");
    const [prevScroll, setPrevScroll] = useState(0);
    const [currentScroll, setCurrentScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setCurrentScroll(window.scrollY);
            if (currentScroll > prevScroll) {
                setDirection("down");
            } else {
                setDirection("up");
            }
        };
        setPrevScroll(window.scrollY);

        setSticky(currentScroll > 86);

        // Initial calculations

        window.addEventListener("scroll", handleScroll);

        // Listen for viewport changes

        // Clean up the event listeners on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentScroll]);

    return (
        <div className="min-h-[86px]">
            <header
                className={`transition-all duration-500 ease-in-out z-[999] w-full ${
                    !sticky ? "block" : "fixed  shadow-xl "
                } ${sticky && direction === "up" ? "top-0" : ""} ${
                    sticky && direction === "down" ? " top-[-100%]" : ""
                }`}
            >
                {children}
            </header>
        </div>
    );
}
