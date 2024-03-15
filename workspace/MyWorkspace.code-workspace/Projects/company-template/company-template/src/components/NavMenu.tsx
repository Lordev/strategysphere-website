"use client";
import { Menubar } from "@/components/ui/menubar";
import Image from "next/image";
import NavMenuItem from "./NavMenuItem";
import { usePathname } from "next/navigation";

export default function NavMenu() {
    const pathName = usePathname();

    const menuItems = [
        { path: "/", name: "Home" },
        { path: "/about", name: "About us" },
        { path: "/team", name: "Our Team" },
        { path: "/contact", name: "Contact Us" },
    ];

    return (
        <header>
            <Menubar
                className="fixed z-50 bg-foreground border-transparent text-white h-fit w-full pl-8 py-0
            shadow-xl  "
            >
                <div className="mr-0">
                    <Image
                        width={420}
                        height={76}
                        src={"/logo-black.png"}
                        alt="logo business"
                        className="-mx-4"
                    />
                </div>
                <div className="flex flex-col gap-x-8 gap-y-4 ml-0 w-full border-l-muted border-l-[.5px] justify-end">
                    <div className="flex gap-x-8">
                        <div className="flex gap-x-8 text-3xl   pl-16 py-8 *:text-sm *:font-[500] *:text-primary *:uppercase *:flex *:items-center *:gap-2">
                            {menuItems.map((i) => {
                                return (
                                    <div key={i.name}>
                                        <NavMenuItem
                                            link={i.path}
                                            active={pathName === i.path}
                                        >
                                            {i.name}{" "}
                                        </NavMenuItem>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Menubar>
        </header>
    );
}
