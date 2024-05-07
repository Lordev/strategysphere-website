import { useState } from "react";

interface IconsProps {
    icon: any;
    className: string;
}

export default function Icon({ icon: Icon, className }: IconsProps) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`icon-container  ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Icon className={className} />
        </div>
    );
}
