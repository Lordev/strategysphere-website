import CardContainer from "./CardContainer";
import Icon from "./Icon";

interface CardProps {
    title: string;
    icon: any;
}

export default function CardHero({ title, icon }: CardProps) {
    return (
        <CardContainer>
            <div className="mx-auto">
                <Icon
                    icon={icon}
                    className="transition-colors duration-200 cursor-pointer opacity-80 hover:animate-bouncy md:w-8  md:h-8 w-4 aspect-square hover:text-red-50 text-[#fff]"
                />
            </div>
            <div>{title}</div>
        </CardContainer>
    );
}
