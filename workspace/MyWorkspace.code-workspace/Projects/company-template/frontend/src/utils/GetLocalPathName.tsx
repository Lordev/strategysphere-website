"use client";

import { usePathname } from "next/navigation";

export default function GetLocalPath() {
    const pathName = usePathname();
    const segments = pathName.split("/");
    return segments;
}
