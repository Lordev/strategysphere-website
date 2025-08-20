'use client';

import { A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
	return (
		<Swiper
			modules={[Autoplay, A11y, EffectFade]}
			slidesPerView={1}
			speed={500}
			effect={'fade'}
			autoplay={{ delay: 4500, disableOnInteraction: false }}
			loop={true}
			className="h-full"
			id="hero-slider"
		>
			<SwiperSlide className="custom-slide">
				<div className="bg-[url('/images/hero-right.jpg')] bg-cover h-full animate-zoom-top-right"></div>
			</SwiperSlide>
			<SwiperSlide className="custom-slide">
				<div className="bg-[url('/images/hero-right-1.jpg')] bg-cover h-full animate-zoom-top-right"></div>
			</SwiperSlide>
			<SwiperSlide className="custom-slide">
				<div className="bg-[url('/images/hero-right-2.jpg')] bg-cover h-full animate-zoom-top-right"></div>
			</SwiperSlide>
		</Swiper>
	);
}
