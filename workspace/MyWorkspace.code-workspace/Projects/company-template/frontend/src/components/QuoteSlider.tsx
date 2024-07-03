'use client';

import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function QuoteSlider() {
	const buttonStyling =
		'text-white w-10 h-10 cursor-pointer block relative transition-transform duration-2500';

	const slideStyling = 'text-white 2xl:text-3xl text-2xl';

	return (
		<Swiper
			modules={[Navigation, A11y]}
			spaceBetween={50}
			slidesPerView={1}
			speed={800}
			loop={true}
			navigation={{
				nextEl: '.custom-next',
				prevEl: '.custom-prev',
			}}
			// pagination={{ clickable: true }}
			// scrollbar={{ draggable: true }}
			className="relative"
			id="quote-swiper"
		>
			<SwiperSlide className={slideStyling}>
				<div className="pb-32">
					{'"'}Our business has transformed with new insights and
					strategies, helping us increase our revenue by 30% in just
					six months. Highly recommend their services!{'"'}
				</div>
			</SwiperSlide>
			<SwiperSlide className={slideStyling}>
				<div className="pb-32">
					{'"'}Working with this consultancy was a game-changer for
					our startup. Expertise in financial planning and market
					analysis was invaluable. We couldn't have achieved our goals
					without this guidance.{'"'}
				</div>
			</SwiperSlide>
			<SwiperSlide className={slideStyling}>
				<div className="pb-32">
					{'"'}The strategic advice and hands-on support have been
					outstanding. The team is knowledgeable, professional, and
					truly cares about our success. Highly recommended.{'"'}
				</div>
			</SwiperSlide>
			<SwiperSlide className={slideStyling}>
				<div className="pb-32">
					{'"'}Comprehensive approach to business development helped
					us identify new opportunities and streamline our operations.
					The impact on our business has been profound.{'"'}
				</div>
			</SwiperSlide>
			<div className="absolute bottom-2 flex gap-8 w-fit">
				<div
					className={`custom-prev swiper-button-prev hover:-translate-x-0.5 ${buttonStyling}`}
				></div>
				<div
					className={`custom-next swiper-button-next hover:translate-x-0.5 ${buttonStyling}`}
				></div>
			</div>
		</Swiper>
	);
}
