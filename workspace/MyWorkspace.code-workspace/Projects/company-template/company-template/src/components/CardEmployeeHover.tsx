import Image from "next/image";
import Icon from "./Icon";
import { FaLinkedin } from "react-icons/fa6";

interface CardEmployeeHoverProps {
    img: string;
    name: string;
    role: string;
}

export default function CardEmployeeHover({ img, name, role }: CardEmployeeHoverProps) {
    return (
        <div className="-mb-8 rounded-sm transition-all duration-500 ease-in">
            <div className="relative mb-8">
                <div>
                    <Image
                        src={img}
                        width={500}
                        height={500}
                        alt="image of an employee"
                        className="relative rounded-sm w-full"
                    ></Image>
                </div>
                <div className="absolute top-0 left-0 right-0 flex flex-col justify-end h-full bg-gradient-to-t from-black/90 to-transparent opacity-0 rounded-sm pb-4 transition-opacity duration-200 ease-out hover:opacity-100 group">
                    <div className="px-4">
                        <h5 className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                            {name}
                        </h5>
                        <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-500 ease-out flex flex-row justify-between ">
                            <h3>{role}</h3>
                            <Icon
                                icon={FaLinkedin}
                                className="w-6 h-6 text-muted hover:text-foreground transition-colors duration-100 ease-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
