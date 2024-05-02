import Image from "next/image";
import Icon from "./Icon";
import { FaLinkedin, FaSquareTwitter } from "react-icons/fa6";

interface CardEmployeeProps {
    imgUrl: string;
    name: string;
    role: string;
}

export default function CardEmployee({ imgUrl, name, role }: CardEmployeeProps) {
    return (
        <div className="max-w-[1075px]">
            <Image
                src={imgUrl}
                width={700}
                height={1075}
                alt="image of an employee"
                className="mb-4 rounded-sm w-full"
            />
            <div className="flex justify-between">
                <div>
                    <h5>{name}</h5>
                    <h3 className="text-muted">{role}</h3>
                </div>
                <div className="flex flex-col gap-2">
                    <Icon
                        icon={FaLinkedin}
                        className="w-6 h-6 text-muted hover:text-foreground transition-colors duration-100 ease-in"
                    />
                    <Icon
                        icon={FaSquareTwitter}
                        className="w-6 h-6 text-muted hover:text-foreground transition-colors duration-100 ease-in"
                    />
                </div>
            </div>
        </div>
    );
}
