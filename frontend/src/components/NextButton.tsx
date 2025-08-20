"use client";

import { ComponentPropsWithRef } from "react";

interface NextButtonProps extends ComponentPropsWithRef<"button"> {
    label: string;
    onClick: () => void;
}

export default function NextButton({ label, ...props }: NextButtonProps) {
    return (
        <button
            {...props}
            className="px-6 py-3 text-sm rounded-lg hover:underline dark:bg-gray-900 dark:text-gray-400"
        >
            {label}
        </button>
    );
}
