import Image from "next/image";

interface KeyPointsProps {
    image: string;
    title: string;
    content: string;
}

export default function KeyPoints({ image, title, content }: KeyPointsProps) {
    return (
        <div>
            <h5 className="text-xl">
                <span className="flex gap-4 items-center">
                    <span>
                        <Image
                            src={image}
                            alt={title}
                            width={35}
                            height={35}
                            className="filter invert grayscale brightness-300"
                        />
                    </span>
                    <span>{title}</span>
                </span>
            </h5>
            <p className="mt-2 text-muted ">{content}</p>
        </div>
    );
}
