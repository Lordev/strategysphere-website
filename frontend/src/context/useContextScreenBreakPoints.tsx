"use client";
import { createContext, useContext, useState, PropsWithChildren, useEffect } from "react";

// Define the Menu Context type
export interface ScreenContextType {
    bigDisplay: boolean;
    smallDisplay: boolean;
    tablet: boolean;
}

// Create the Context
const ScreenBreakPointContext = createContext<ScreenContextType | undefined>(undefined);

// Custom hook to use the Menu Context
export const useScreenBreakPoint = (): ScreenContextType => {
    const context = useContext(ScreenBreakPointContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
};

// Menu Provider Component
export default function ScreenBreakPointProvider({ children }: PropsWithChildren) {
    const [bigDisplay, setBigDisplay] = useState(false);
    const [smallDisplay, setSmallDisplay] = useState(false);
    const [tablet, setTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setBigDisplay(width < 1280);
            setSmallDisplay(width <= 1280);
            setTablet(width <= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const screenState: ScreenContextType = {
        bigDisplay,
        smallDisplay,
        tablet,
    };

    return (
        <ScreenBreakPointContext.Provider value={screenState}>
            {children}
        </ScreenBreakPointContext.Provider>
    );
}
