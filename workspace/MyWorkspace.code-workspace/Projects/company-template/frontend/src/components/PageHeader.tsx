// ./frontend/src/app/[lang]/components/PageHeader.tsx
import { ImageProps } from "next/image";
import { NextBreadcrumb } from "./Breadcrumbs";
import { PropsWithChildren } from "react";

interface PageHeaderProps extends PropsWithChildren {
    heading: string;
    backgroundImage?: ImageProps;
    filter?: number[];
}

export default function PageHeader({ heading, filter = [0] }: PageHeaderProps) {
    return (
        <div className="my-16 w-full max-w-screen-2xl mx-auto">
            <h1>{heading}</h1>
            <NextBreadcrumb
                homeElement={"Home"}
                separator={
                    <li>
                        <h3> - </h3>
                    </li>
                }
                activeClasses={"text-accent"}
                containerClasses="flex flex-wrap items-center"
                listClasses={"hover:underline cursor-pointer"}
                capitalizeLinks
                filter={filter}
            />
        </div>
    );
}
