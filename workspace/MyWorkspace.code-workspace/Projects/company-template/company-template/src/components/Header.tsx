import HeaderContainer from "./HeaderContainer";
import MenuBar from "./MenuBar";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <HeaderContainer>
            <div className="bg-foreground border-transparent text-white pl-8 py-12 flex h-10 items-center space-x-1 rounded-md border p-1">
                <div className="mr-0">
                    <Link href="/">
                        <Image
                            width={420}
                            height={76}
                            src={"/logo-black.png"}
                            alt="logo business"
                            className="-mx-4"
                        />
                    </Link>
                </div>
                <div className="flex flex-col gap-x-8 ml-0 w-full border-l-muted border-l-[.5px] justify-end">
                    <div className="flex sm:gap-x-8 max-xl:justify-end max-xl:pr-8">
                        <MenuBar />
                    </div>
                </div>
            </div>
        </HeaderContainer>
    );
}
