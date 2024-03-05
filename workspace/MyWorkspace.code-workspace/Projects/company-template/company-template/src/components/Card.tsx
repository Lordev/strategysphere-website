"use client";

import React from "react";
import Icon from "./Icon";

interface CardProps {
    title: string;
    content: string;
    icon: any;
}

export default function Card({ title, content, icon }: CardProps) {
    return (
        <div className="w-80 h-full relative before:rounded-md before:bg-card before:absolute before:opacity-50 py-8 container before:inset-0 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 before:-z-10 hover:shadow-2xl">
            <div className="mx-auto">
                <Icon
                    icon={icon}
                    className="transition-colors duration-200 cursor-pointer opacity-80 hover:animate-bouncy h-8 w-8 hover:text-red-50 text-[#fff]"
                />
            </div>
            <h4 className="scroll-m-20 text-lg font-semibold font-[marcellus] text-[#fff]">
                {title}
            </h4>
            <p className="text-[#ddd]">{content}</p>
        </div>
    );
}
