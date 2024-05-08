interface IconsProps {
    icon: any;
    className: string;
}

export default function Icon({ icon: Icon, className }: IconsProps) {
    return (
        <>
            <a href="#">
                <Icon className={className} />
            </a>
        </>
    );
}
