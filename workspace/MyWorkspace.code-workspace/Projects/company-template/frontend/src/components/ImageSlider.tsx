"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface ImageSliderProps {
    imageData: {
        url: string;
        _key: string;
    }[];
}

const buttonStyling =
    "text-white w-10 h-10 cursor-pointer block relative transition-transform duration-2500";

export default function ImageSlider({ imageData }: ImageSliderProps) {
    if (!imageData) return <div>Invalid Image url</div>;
    return (
        <Swiper
            modules={[Navigation, A11y]}
            slidesPerView={1}
            speed={800}
            loop={true}
            navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
            }}
            className="relative md:max-w-screen-xs xl:max-w-screen-sm 2xl:max-w-screen-lg mt-20 overflow-visible"
            id="image-swiper"
        >
            {imageData.map((image) => {
                return (
                    <SwiperSlide key={image._key}>
                        {image && (
                            <Image
                                className="object-cover rounded-lg w-full h-96 px-10"
                                height={400}
                                width={600}
                                alt="alt text"
                                src={image.url}
                            />
                        )}
                    </SwiperSlide>
                );
            })}
            <div className="absolute left-0 bottom-1/2">
                <div
                    className={`custom-prev swiper-button-prev hover:-translate-x-0.5 ${buttonStyling}`}
                ></div>
            </div>
            <div className="absolute right-0 bottom-1/2">
                <div
                    className={`custom-next swiper-button-next hover:translate-x-0.5 ${buttonStyling}`}
                ></div>
            </div>
        </Swiper>
    );
}
