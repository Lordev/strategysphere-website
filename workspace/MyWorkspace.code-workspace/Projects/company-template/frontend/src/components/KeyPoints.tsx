import Image from "next/image";

interface KeyPointsProps {
    image: string;
    title: string;
    content: string;
}

export default function KeyPoints({ image, title, content }: KeyPointsProps) {
    return (
        <div>
            <div className="text-xl">
                <span className="grid-cols-[repeat(auto_2)] grid items-center justify-center text-center">
                    <span className="mx-auto">
                        <Image
                            src={image}
                            alt={title}
                            width={35}
                            height={35}
                            className="filter invert grayscale brightness-300 mb-4"
                        />
                    </span>
                    <span>{title}</span>
                </span>
            </div>
            <p className="mt-2 text-muted text-center">{content}</p>
        </div>
    );
}
