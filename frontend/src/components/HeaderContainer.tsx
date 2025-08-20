"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import { useScreenBreakPoint } from "@/context/useContextScreenBreakPoints";

export default function HeaderContainer({ children }: PropsWithChildren) {
    const { smallDisplay } = useScreenBreakPoint();
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

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentScroll]); // eslint-disable-line

    return (
        <div className="md:min-h-[86px] min-h-[64px]">
            <header
                className={`transition-all duration-500 ease-in-out z-[998] w-full ${
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
