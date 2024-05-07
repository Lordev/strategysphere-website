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
        <div className="w-52 h-full shadow-xl relative rounded-md before:bg-[#F4F9FF] before:absolute before:opacity-10 p-8 before:inset-0 flex flex-col gap-8 transition-transform duration-300 hover:-translate-y-4 hover:shadow-2xl">
            <div className="mx-auto">
                <Icon
                    icon={icon}
                    className="transition-colors duration-200 cursor-pointer opacity-80 hover:animate-bouncy h-8 w-8 hover:text-red-50 text-[#C5A3A7]"
                />
            </div>
            <h4 className="scroll-m-20 text-2xl font-semibold font-[marcellus] text-[#ddd]">
                {title}
            </h4>
            <p className="text-[#cccccc]">{content}</p>
        </div>
    );
}
