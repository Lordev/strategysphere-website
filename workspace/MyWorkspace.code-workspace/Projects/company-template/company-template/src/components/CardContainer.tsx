import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {}

export default function CardContainer({ children }: CardProps) {
    return (
        <div className="card before:rounded-md before:bg-zinc-400 before:absolute before:opacity-50 py-4 sm:py-8 px-4 before:inset-0 flex items-center sm:flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl max-w-80">
            {children}
        </div>
    );
}
