import Hero from '@/components/Hero';
import Image from 'next/image';
import StraightAnglePieChart from '@/components/StraightAnglePieChart';
import QuoteSlider from '@/components/QuoteSlider';
import Button from '@/components/Button';
import Counter from '@/components/CountUp';
import OpacityAnimation from '@/components/animation/OpacityAnimation';
import KeyPoints from '@/components/KeyPoints';
import FadeInAnimation from '@/components/animation/FadeInAnimation';
import FadeWrapper from '@/components/FadeWrapper';
import ServiceCards from '@/components/ServiceCards.';
import Parallax from '@/components/Parallax';

export default function Home() {
	return (
		<main className="overflow-hidden">
			<Hero />
			<FadeInAnimation>
				<section className="bg-zinc-200 text-primary py-20 ">
					<div className="container text-center">
						<div className="mx-auto max-w-[450px]">
							<h6>We deliver sublime services</h6>
							<h1>
								Trusted Partner of <Counter endtime={200} />+
								Clients
							</h1>
							<p className="mx-auto">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Dicta deserunt similique error
								eaque harum, recusandae ducimus voluptatum
								aliquam quod.
							</p>
						</div>
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-sm justify-center items-center *:flex *:items-center *:flex-col *:gap-4 2xl:px-40 px-4 *:max-w-80 *:mx-auto">
							<div>
								<Image
									width={50}
									height={50}
									src={'/portfolio.png'}
									alt="portfolio image"
								/>
								<h4>Opportunities</h4>
								<p>
									Discover new pathways to enhance your career
									and business prospects. Explore various
									opportunities tailored to your unique
									strengths and goals.
								</p>
							</div>
							<div>
								<Image
									width={50}
									height={50}
									src={'/portfolio-analysis.png'}
									alt="portfolio image"
								/>
								<h4>Business Plan</h4>
								<p>
									Craft a comprehensive business plan that
									outlines your strategic vision, operational
									tactics, and financial projections. A
									well-defined plan is crucial for attracting
									investors.
								</p>
							</div>
							<div>
								<Image
									width={50}
									height={50}
									src={'/financial-profit.png'}
									alt="portfolio image"
								/>
								<h4>Financial Gain</h4>
								<p>
									Learn the key strategies for maximizing your
									financial returns. From smart investments to
									effective cost management, discover the
									tools and techniques.
								</p>
							</div>
							<div>
								<Image
									width={50}
									height={50}
									src={'/briefcase.png'}
									alt="portfolio image"
								/>
								<h4>Opportunity Gains</h4>
								<p>
									Leverage emerging opportunities to achieve
									substantial gains. Stay ahead of market
									trends and capitalize on innovative ventures
									that promise high rewards.
								</p>
							</div>
						</div>
					</div>
				</section>
			</FadeInAnimation>
			<FadeInAnimation>
				<section className="h-full relative  before:bg-abstract before:absolute before:bg-cover before:h-full before:w-1/2 before:bg-no-repeat before:left-1/2 before:-z-20 before:opacity-5">
					<div className="gap-16 grid xl:grid-cols-2 xl:py-40 py-20">
						<div className="xl:col-start-1 xl:mx-0 mx-auto">
							<FadeWrapper
								fadeProps={{
									direction: 'left',
									triggerOnce: true,
								}}
							>
								<Image
									src={'/images/three-employees.jpg'}
									alt="professional advisory"
									width={1800}
									height={1200}
									className="aspect-[1800/1200] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] overflow-clip w-full h-full max-w-[1800px]"
								/>
							</FadeWrapper>
						</div>
						<div className="flex items-center ">
							<div className="xl:col-start-2 lg:max-w-[900px] w-screen lg:w-full lg:pr-8 max-xl:mx-auto max-xl:px-8">
								<svg
									fill="#000000"
									viewBox="0 0 32 32"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									className="w-20 h-20 fill-accent mb-16"
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
										<title>quote</title>{' '}
										<path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>{' '}
									</g>
								</svg>
								<QuoteSlider />
							</div>
						</div>
					</div>
				</section>
			</FadeInAnimation>
			<FadeInAnimation>
				<section className="h-full container py-20 xl:py-40">
					<div className="text-center xl:mb-40 mb-12 mx-auto max-w-[800px]">
						<h6>Financial Reports</h6>
						<h2>Expert Business Insights</h2>
						<p>
							Gain a deeper understanding of market trends and
							financial health with our expert business insights.
							Our comprehensive reports provide valuable data and
							analysis to help you make informed decisions.
						</p>
					</div>
					<div className="flex flex-wrap xl:flex-nowrap justify-center text-center xl:*:mt-16 *:mt-12">
						<div className="2xl:px-20 px-2 text-center">
							{/* <Fade triggerOnce={true}> */}
							<StraightAnglePieChart />
							{/* </Fade> */}
							<h4>Financial Report for 2019</h4>
							<p className="text-muted">
								Discover the financial highlights and key
								takeaways from 2019. Our report covers essential
								metrics and performance indicators.
							</p>
						</div>
						<div className="2xl:px-20 px-2 text-center">
							{/* <Fade triggerOnce={true}> */}
							<StraightAnglePieChart />
							{/* </Fade> */}
							<h4>Financial Report for 2020</h4>
							<p className="text-muted">
								Explore the comprehensive financial analysis for
								2020. Understand the impact of global events on
								market performance.
							</p>
						</div>
						<div className="2xl:px-20 px-2 text-center">
							{/* <Fade triggerOnce={true}> */}
							<StraightAnglePieChart />
							{/* </Fade> */}
							<h4>Financial Report for 2021</h4>
							<p className="text-muted">
								Review the financial data and insights from
								2021. Our report provides a detailed overview of
								growth trends and economic indicators.
							</p>
						</div>
					</div>
				</section>
			</FadeInAnimation>
			<FadeInAnimation>
				<section className="h-full relative  before:bg-earth before:absolute before:bg-cover before:h-full before:w-full before:bg-no-repeat before:left-0 before:-z-20 before:opacity-50">
					<div className="gap-16 grid xl:grid-cols-2 xl:py-40 py-20">
						<div className="grid items-center  w-full   mx-auto ">
							<div className="max-w-[900px] xl:ml-auto max-xl:text-center max-xl:px-8 xl:pl-8 mx-auto">
								<h6>We deliver sublime services</h6>
								<h2>
									The best chance to expand your{' '}
									<span className="text-[#B7891C]">
										{' '}
										business ventures
									</span>
								</h2>
								<Button title="Contact us" />
							</div>
						</div>
						<div className="xl:col-start-2 max-xl:mx-auto ">
							<FadeWrapper
								fadeProps={{
									triggerOnce: true,
									direction: 'right',
								}}
							>
								<Image
									src={'/images/notation.jpg'}
									alt="professional advisory"
									width={1800}
									height={1200}
									className="aspect-[1800/1200] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] overflow-clip w-full h-full max-w-[1800px] ml-auto"
								/>
							</FadeWrapper>
						</div>
					</div>
				</section>
			</FadeInAnimation>
			<FadeInAnimation>
				<section className="py-40 bg-zinc-200">
					<div className="text-center xl:mb-40 mb-12 mx-auto max-w-[800px] text-primary">
						<h6>Financial Reports</h6>
						<h2>Expert Business Insights</h2>
						<p>
							Gain a deeper understanding of market trends and
							financial health with our expert business insights.
							Our comprehensive reports provide valuable data and
							analysis to help you make informed decisions.
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-8">
						<ServiceCards />
					</div>
				</section>
			</FadeInAnimation>
			<OpacityAnimation>
				<section>
					<Parallax
						bgImage="/images/office-buildings.jpg"
						bgImageAlt="office buildings"
						strength={300}
						bgClassName="object-cover"
					>
						<div className="py-20 sm:py-40 container">
							<div className="flex flex-col gap-y-4 justify-center text-center">
								<h6>Key Features</h6>
								<h2 className="text-[#fff]">
									Grow in various ways
								</h2>
							</div>
							<div className="col-start-2 col-span-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-2 sm:gap-y-20 opacity-90 sm:mt-40 mt-20 *:mb-8 gap-y-2 max-w-screen-xl mx-auto">
								<FadeInAnimation>
									<KeyPoints
										image="/promotion-application.png"
										title="Strategy Consulting"
										content="Tailored strategies for market success."
									/>
								</FadeInAnimation>
								<FadeInAnimation>
									<KeyPoints
										image="/workflow.png"
										title="Solutions Provider"
										content="Innovative solutions for your challenges."
									/>
								</FadeInAnimation>
								<FadeInAnimation>
									<KeyPoints
										image="/community.png"
										title="Advisory Services"
										content="Expert guidance for informed decisions."
									/>
								</FadeInAnimation>
								<FadeInAnimation>
									<KeyPoints
										image="/meeting.png"
										title="Innovation Hub"
										content="Fueling creativity and breakthroughs."
									/>
								</FadeInAnimation>
								<FadeInAnimation>
									<KeyPoints
										image="/vision.png"
										title="Growth Partners"
										content="Your allies in achieving growth goals."
									/>
								</FadeInAnimation>
								<FadeInAnimation>
									<KeyPoints
										image="/data.png"
										title="Optimization Experts"
										content="Maximizing efficiency and performance."
									/>
								</FadeInAnimation>
								<FadeInAnimation>
									<KeyPoints
										image="/briefcase.png"
										title="Transformational Consulting"
										content="Driving transformative change."
									/>
								</FadeInAnimation>
								<FadeInAnimation>
									<KeyPoints
										image="/brainstorming.png"
										title="Excellence Delivery"
										content="Delivering excellence every step of the way."
									/>
								</FadeInAnimation>
								<FadeInAnimation>
									<KeyPoints
										image="/consultation.png"
										title="Insightful Analysis"
										content="Insights to inform strategic decisions."
									/>
								</FadeInAnimation>
								<FadeInAnimation>
									<KeyPoints
										image="/data-modelling.png"
										title="Impactful Solutions"
										content="Solutions that make a difference."
									/>
								</FadeInAnimation>
								<FadeInAnimation>
									<KeyPoints
										image="/goal.png"
										title="Performance Improvement"
										content="Achieving peak performance."
									/>
								</FadeInAnimation>
								<FadeInAnimation>
									<KeyPoints
										image="/promotion.png"
										title="Agile Consulting"
										content="Adaptable solutions for changing landscapes."
									/>
								</FadeInAnimation>
							</div>
						</div>
					</Parallax>
				</section>
			</OpacityAnimation>
			<section className="bg-zinc-200 py-8 text-end text-primary overflow-hidden">
				<h2 className="md:mr-16 mr-8">
					Your company{`’`}s future with us, guaranteed success.
				</h2>
			</section>
		</main>
	);
}
