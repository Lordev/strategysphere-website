"use client";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function QuoteSliderTwo() {
    const buttonStyling =
        "text-white w-10 h-10 absolute cursor-pointer block transition-transform duration-2500";

    const slidesStyling = "md:text-3xl sm:text-2xl text-lg pb-32";

    return (
        <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            speed={800}
            loop={true}
            navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
            }}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="relative max-w-5xl"
            id="quote-swiper2"
        >
            <SwiperSlide className="custom-slide text-center">
                <p className={slidesStyling}>
                    {'"'}Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                    obcaecati minus ducimus saepe culpa vitae porro exercitationem tenetur
                    omnis! Sapiente, dignissimos? Perferendis voluptate aut ut porro,
                    earum neque minima sint.{'"'}
                </p>
                <h6>CEO CEDRIC XIA XING</h6>
            </SwiperSlide>
            <SwiperSlide className="custom-slide text-center">
                <p className={slidesStyling}>
                    {'"'}Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                    obcaecati minus ducimus saepe culpa vitae porro exercitationem tenetur
                    omnis! Sapiente, dignissimos? Perferendis voluptate aut ut porro,
                    earum neque minima sint.{'"'}
                </p>
                <h6>CEO CEDRIC XIA XING</h6>
            </SwiperSlide>
            <SwiperSlide className="custom-slide text-center">
                <p className={slidesStyling}>
                    {'"'}Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                    obcaecati minus ducimus saepe culpa vitae porro exercitationem tenetur
                    omnis! Sapiente, dignissimos? Perferendis voluptate aut ut porro,
                    earum neque minima sint.{'"'}
                </p>
                <h6>CEO CEDRIC XIA XING</h6>
            </SwiperSlide>
            <SwiperSlide className="custom-slide text-center">
                <p className={slidesStyling}>
                    {'"'}Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                    obcaecati minus ducimus saepe culpa vitae porro exercitationem tenetur
                    omnis! Sapiente, dignissimos? Perferendis voluptate aut ut porro,
                    earum neque minima sint.{'"'}
                </p>
                <h6>CEO CEDRIC XIA XING</h6>
            </SwiperSlide>
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
