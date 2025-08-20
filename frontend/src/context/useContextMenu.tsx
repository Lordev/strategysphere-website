"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

export interface MenuContextType {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
    openMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
};

export default function MenuProvider({ children }: PropsWithChildren) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const menuState: MenuContextType = {
        isMenuOpen,
        toggleMenu,
        closeMenu,
        openMenu,
    };

    return <MenuContext.Provider value={menuState}>{children}</MenuContext.Provider>;
}
