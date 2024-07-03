import FadeWrapper from '@/components/FadeWrapper';
import LineChart from '@/components/LineChart';
import PageHeader from '@/components/PageHeader';
import QuoteSliderTwo from '@/components/QuoteSliderTwo';
import VideoModal from '@/components/VideoModal';
import Image from 'next/image';

export default function About() {
	return (
		<main className="overflow-hidden">
			<section className="py-40 bg-about-us-banner bg-cover bg-center text-primary">
				<PageHeader heading="About us" />
			</section>
			<section className="max-w-screen-3xl mx-auto px-8 3xl:px-0">
				<div className="h-full col-start-2 mt-40">
					<div className="border-l-accent border-l-2 sm:px-20 px-8 max-w-[900px]">
						<h6>ALEX LEE - CEO</h6>
						<h2>
							Launch your creative ideas. Whatever you imagine we
							will make it happen with our team of specialists.
						</h2>
					</div>
				</div>
			</section>
			<section className="col-start-2 lg:grid lg:grid-cols-[2fr_1fr]   mt-40 gap-8">
				<div className="relative before:bg-foreground before:inset-0 before:absolute before:opacity-70 before:[clip-path:_polygon(0_0,_40%_0,_60%_100%,_0%_100%)]">
					<Image
						src={'/images/airport-terminal.jpg'}
						height={1000}
						width={1124}
						alt="airport hallway image"
						className="h-full w-full"
					/>
				</div>
				<div className="grid lg:grid-rows-2 sm:grid-cols-2 lg:grid-cols-none gap-8 lg:mt-0 mt-8">
					<div>
						<Image
							src={'/images/suit-office.jpg'}
							height={600}
							width={623}
							alt="airport hallway image"
							className="h-full w-full object-cover"
						/>
					</div>

					<div className="relative group overflow-hidden">
						<a href="#">
							<Image
								src={'/images/white-paper.jpg'}
								width={676}
								height={500}
								alt="airport hallway image"
								className="h-full w-full 
                                scale-x-105
                                translate-x-0
                                group-hover:translate-x-1
                                transition-transform duration-700 ease-out"
							/>
							<div className="absolute bottom-16 px-8 flex-row justify-between flex w-full items-center gap-4 ">
								<h5>Our Centralized Database Platform</h5>
								<svg
									version="1.1"
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 32 32"
									enableBackground="new 0 0 32 32"
									fill="#000000"
									className="h-16"
								>
									<g
										id="SVGRepo_bgCarrier"
										strokeWidth="0"
									></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{' '}
										<g>
											{' '}
											<path
												fill="var(--foreground)"
												d="M13.224,21.2c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146l4.846-4.846 c0.195-0.195,0.195-0.512,0-0.707L13.931,10.8c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707L17.716,16l-4.492,4.493 C13.028,20.688,13.028,21.004,13.224,21.2z"
											></path>{' '}
											<path
												fill="var(--foreground)"
												d="M0,1.5v29C0,31.327,0.673,32,1.5,32h29c0.827,0,1.5-0.673,1.5-1.5v-29C32,0.673,31.327,0,30.5,0h-29 C0.673,0,0,0.673,0,1.5z M31,1.5v29c0,0.276-0.225,0.5-0.5,0.5h-29C1.225,31,1,30.776,1,30.5v-29C1,1.224,1.225,1,1.5,1h29 C30.775,1,31,1.224,31,1.5z"
											></path>{' '}
										</g>{' '}
									</g>
								</svg>
							</div>
						</a>
					</div>
				</div>
			</section>
			<section className="bg-primary py-40">
				<div className="col-start-2 lg:grid lg:grid-cols-[1fr_minmax(600px,1fr)] gap-8 container text-foreground">
					<div>
						<h6>Inspirational Business Values</h6>
						<h2>
							Our Solutions Are The Key For Good Business Flow
						</h2>
					</div>
					<div className="grid xs:grid-cols-2 gap-16 max-lg:mt-16">
						<div>
							<Image
								width={60}
								height={60}
								src={'/1.png'}
								alt="portfolio image"
								className="mb-4 opacity-50"
							/>
							<h5>Our Values</h5>
							<p>
								Guided by integrity, excellence, and innovation,
								our values drive every decision and action.
							</p>
						</div>
						<div>
							<Image
								width={60}
								height={60}
								src={'/2.png'}
								alt="portfolio image"
								className="mb-4 opacity-50"
							/>
							<h5>People First</h5>
							<p>
								We prioritize the well-being and growth of our
								team and clients, fostering a culture of
								collaboration and support.
							</p>
						</div>
						<div>
							<Image
								width={60}
								height={60}
								src={'/3.png'}
								alt="portfolio image"
								className="mb-4 opacity-50"
							/>
							<h5>Advance Together</h5>
							<p>
								Together, we strive for progress and success,
								leveraging collective strengths to achieve
								shared goals.
							</p>
						</div>
						<div>
							<Image
								width={60}
								height={60}
								src={'/4.png'}
								alt="portfolio image"
								className="mb-4 opacity-50"
							/>
							<h5>Opportunity Gains</h5>
							<p>
								We seize every opportunity for growth and
								development, turning challenges into stepping
								stones for success.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="md:grid md:grid-cols-[minmax(360px,1fr)_3fr]">
				<div className="relative group overflow-hidden h-60 md:h-full flex items-center">
					<Image
						src={'/images/buildings-blue-filter.jpg'}
						alt="airport hallway image"
						fill
						style={{
							objectFit: 'cover',
						}}
					/>
					<div className="absolute bottom-16 px-8 max-w-[360px] flex-row justify-between flex items-center w-full">
						<h5>
							Watch our business presentation with a look into our
							services in 2024
						</h5>
					</div>
				</div>
				<VideoModal />
				{/* <VideoPlayer /> */}
			</section>
			<section className="my-40">
				<div className="grid lg:grid-cols-2 gap-16 py-2">
					<div className="relative">
						<FadeWrapper
							fadeProps={{ direction: 'left', triggerOnce: true }}
						>
							<Image
								src={'/images/calculations-2.jpg'}
								alt="calculating strategies"
								width={1800}
								height={1200}
								className="aspect-[1800/1200] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] overflow-clip w-full h-full"
							/>
						</FadeWrapper>
					</div>
					<div className="">
						<div className="pb-16 max-w-[900px]">
							<h6>Inspirational Business Values</h6>
							<h2>
								Our Solutions Are The Key For Good Business Flow
							</h2>
						</div>
						<FadeWrapper
							fadeProps={{
								direction: 'right',
								triggerOnce: true,
							}}
						>
							<div className="h-full w-full">
								<LineChart />
							</div>
						</FadeWrapper>
					</div>
				</div>
			</section>
			<section className="w-screen my-40">
				<svg
					fill="#000000"
					viewBox="0 0 32 32"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					className="w-20 h-20 fill-accent mb-16 mx-auto"
				>
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						strokeLinecap="round"
						strokeLinejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						{' '}
						<title>quote</title>{' '}
						<path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>{' '}
					</g>
				</svg>
				<QuoteSliderTwo />
			</section>
		</main>
	);
}
