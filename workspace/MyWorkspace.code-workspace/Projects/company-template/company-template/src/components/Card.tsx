import React from "react";
import Icon from "./Icon";

interface CardProps {
    title: string;
    content: string;
    icon: any;
}

export default function Card({ title, content, icon }: CardProps) {
    return (
        <div className="sm:w-80 w-full relative before:rounded-md before:bg-card before:absolute before:opacity-50 py-2 sm:py-8 px-4 before:inset-0 flex items-center sm:flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="mx-auto">
                <Icon
                    icon={icon}
                    className="transition-colors duration-200 cursor-pointer opacity-80 hover:animate-bouncy h-8 w-8 hover:text-red-50 text-[#fff]"
                />
            </div>
            <h4>{title}</h4>
            <p className="text-muted">{content}</p>
        </div>
    );
}
