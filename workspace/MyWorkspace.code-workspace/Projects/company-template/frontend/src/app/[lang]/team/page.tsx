import Image from 'next/image';
import CardEmployee from '@/components/CardEmployee';
import CardEmployeeHover from '@/components/CardEmployeeHover';
import PageHeader from '@/components/PageHeader';

export default function OurTeam() {
	return (
		<>
			<section className="py-40 bg-team-banner bg-cover bg-top text-primary">
				<PageHeader heading="Our Team" />
			</section>
			<section className="max-w-screen-3xl mx-auto px-4 3xl:px-0">
				<div className="h-full col-start-2 lg:mt-40 mt-20">
					<div className="border-l-accent border-l-2 sm:px-20 px-8 max-w-[900px]">
						<h6>Management Consulting Group</h6>
						<h2>
							Meet Our Exceptional Team: Driving Success with
							Talent and Dedication
						</h2>
					</div>
				</div>
			</section>

			<section className="justify-center gap-8 lg:mt-40 mt-20 col-start-2  grid xl:grid-cols-4 sm:grid-cols-2 px-4">
				<CardEmployee
					imgUrl="/images/office-worker-1.jpg"
					name="John Doe"
					role="Technical Advisor"
				/>
				<CardEmployee
					imgUrl="/images/office-worker-2.jpg"
					name="John Doe"
					role="Technical Advisor"
				/>
				<CardEmployee
					imgUrl="/images/office-worker-3.jpg"
					name="John Doe"
					role="Technical Advisor"
				/>
				<CardEmployee
					imgUrl="/images/office-worker-4.jpg"
					name="John Doe"
					role="Technical Advisor"
				/>
			</section>
			<section className="max-w-screen-3xl mx-auto max-3xl:px-4">
				<div className="h-full col-start-2 lg:mt-40 mt-20">
					<div className="md:w-1/2">
						<h6>Management Consulting Group</h6>
						<h2>Delivering Transformative Business Solutions</h2>
					</div>
					<div className="md:grid-cols-2 grid gap-x-16 mt-4">
						<p className="text-muted">
							At Strategysphere Advisors, we pride ourselves on
							offering comprehensive solutions that drive business
							success. Our team of experienced consultants works
							closely with clients to identify challenges, create
							tailored strategies, and implement effective
							solutions. We believe in a collaborative approach,
							ensuring that our clients are involved every step of
							the way. Our expertise spans various industries,
							providing us with the versatility to adapt to each
							unique business environment. With a focus on
							innovation and efficiency, we help businesses
							achieve sustainable growth and operational
							excellence. Our services cover a wide range of
							areas, including strategic planning, financial
							analysis, market research, and process optimization.
							We are dedicated to staying ahead of industry trends
							and continuously improving our methodologies to
							deliver the best results for our clients. Partnering
							with us means gaining access to a wealth of
							knowledge and resources that can propel your
							business to new heights.
						</p>
						<div>
							<p className="text-muted">
								Our services include strategic planning,
								financial analysis, market research, and process
								optimization. We understand that each business
								is unique, which is why we offer personalized
								consulting services to meet specific needs.
								Whether you're looking to expand your market
								presence, improve financial performance, or
								streamline operations, our consultants are here
								to help. We are committed to delivering
								measurable results and exceeding client
								expectations. Partner with Strategysphere
								Advisors to take your business to the next
								level.
							</p>
							<Image
								src={'/autograph.png'}
								width={250}
								height={163}
								alt="autograph"
								className="-translate-y-2 mx-auto opacity-80"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="lg:mt-40 mt-20 xl:grid-cols-4 grid-cols-2 grid gap-8 justify-center px-4">
				<CardEmployeeHover
					img="/images/hremployee-1.jpg"
					name="Johh Doe"
					role="Manager"
				/>
				<CardEmployeeHover
					img="/images/hremployee-2.jpg"
					name="Johh Doe"
					role="Manager"
				/>
				<CardEmployeeHover
					img="/images/hremployee-4.jpg"
					name="Johh Doe"
					role="Manager"
				/>
				<CardEmployeeHover
					img="/images/hremployee-5.jpg"
					name="Johh Doe"
					role="Manager"
				/>
				<CardEmployeeHover
					img="/images/hremployee-6.jpg"
					name="Johh Doe"
					role="Manager"
				/>
				<CardEmployeeHover
					img="/images/hremployee-7.jpg"
					name="Johh Doe"
					role="Manager"
				/>
				<CardEmployeeHover
					img="/images/hremployee-8.jpg"
					name="Johh Doe"
					role="Manager"
				/>
				<CardEmployeeHover
					img="/images/hremployee-10.jpg"
					name="Johh Doe"
					role="Manager"
				/>
			</section>
			<section className="lg:py-40 py-20 bg-primary">
				<div className="max-w-screen-3xl mx-auto max-3xl:px-4 text-foreground">
					<div className="h-full col-start-2 ">
						<div className="max-w-4xl">
							<h6>Management Consulting Group</h6>
							<h2>
								Meet Our Exceptional Team: Driving Success with
								Talent and Dedication
							</h2>
						</div>
					</div>
					<div className="col-start-2 grid sm:grid-cols-2 mt-20 justify-center items-center lg:grid-cols-4 gap-8 ">
						<div>
							<Image
								width={60}
								height={60}
								src={'/5.png'}
								alt="portfolio image"
								className="opacity-60 mb-8"
							/>
							<h4>Expertise in Startup Investments</h4>
							<p>
								Our team excels in identifying and nurturing
								promising startups. We provide strategic
								guidance and financial support to help new
								businesses thrive in a competitive market.
							</p>
						</div>
						<div>
							<Image
								width={60}
								height={60}
								src={'/6.png'}
								alt="portfolio image"
								className="opacity-60 mb-8"
							/>
							<h4>Comprehensive Business Development</h4>
							<p>
								We offer end-to-end business development
								services, from market analysis and strategic
								planning to execution and growth optimization.
								Our goal is to ensure your business reaches its
								full potential.
							</p>
						</div>
						<div>
							<Image
								width={60}
								height={60}
								src={'/7.png'}
								alt="portfolio image"
								className="opacity-60 mb-8"
							/>
							<h4>Strategic Financial Planning</h4>
							<p>
								Our financial planning services are designed to
								provide businesses with a clear roadmap to
								financial stability and growth. We focus on
								maximizing profit and minimizing risks.
							</p>
						</div>
						<div>
							<Image
								width={60}
								height={60}
								src={'/8.png'}
								alt="portfolio image"
								className="opacity-60 mb-8"
							/>
							<h4>Innovative Market Strategies</h4>
							<p>
								We develop innovative market strategies tailored
								to your business needs. Our expertise helps you
								navigate market challenges and capitalize on
								opportunities for expansion.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
