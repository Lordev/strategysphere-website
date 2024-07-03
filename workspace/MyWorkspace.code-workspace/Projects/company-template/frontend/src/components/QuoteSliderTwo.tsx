'use client';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function QuoteSliderTwo() {
	const buttonStyling =
		'text-white w-10 h-10 absolute cursor-pointer block transition-transform duration-2500';
	const slidesStyling = 'md:text-3xl sm:text-2xl text-lg pb-32';

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
			className="relative max-w-5xl"
			id="quote-swiper2"
		>
			<SwiperSlide className="custom-slide text-center">
				<p className={slidesStyling}>
					{'"'}Our business has transformed with new insights and
					strategies, helping us increase our revenue by 30% in just
					six months. Highly recommend their services!{'"'}
				</p>
				<h6>CEO CEDRIC XIA XING</h6>
			</SwiperSlide>
			<SwiperSlide className="custom-slide text-center">
				<p className={slidesStyling}>
					{'"'}The team{"'"}s expertise in market analysis provided us
					with critical insights, leading to a successful product
					launch. Exceptional service and results!{'"'}
				</p>
				<h6>MARKETING DIRECTOR JULIA ROBERTS</h6>
			</SwiperSlide>
			<SwiperSlide className="custom-slide text-center">
				<p className={slidesStyling}>
					{'"'}Their strategic planning and financial advice have been
					instrumental in our growth. We{"'"}ve seen a significant
					improvement in our bottom line.{'"'}
				</p>
				<h6>FINANCE MANAGER JOHN DOE</h6>
			</SwiperSlide>
			<SwiperSlide className="custom-slide text-center">
				<p className={slidesStyling}>
					{'"'}Partnering with this consultancy has been a
					game-changer for us. Their innovative approach and
					dedication to our success are unmatched.{'"'}
				</p>
				<h6>COO EMILY SMITH</h6>
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
