"use client";

import { useMenu } from "@/context/useContextMenu";
import { IconMenu } from "@/components/Svg/Index";

export default function MenuButton() {
    const { isMenuOpen, openMenu } = useMenu();

    return (
        <div className="cursor-pointer xl:hidden">
            <a onClick={!isMenuOpen ? openMenu : undefined}>
                <IconMenu className="text-[var(--primary)] hover:text-[var(--accent)] lg:w-[30px] " />
            </a>
        </div>
    );
}
