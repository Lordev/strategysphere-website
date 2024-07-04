import CardHero from './CardHero';
import {
	TargetIcon,
	HomeIcon,
	RocketIcon,
	PersonIcon,
	ChevronDownIcon,
	BorderSolidIcon,
} from '@radix-ui/react-icons';
import HeroSlider from './HeroSlider';

export default function Hero() {
	return (
		<section className="relative overflow-hidden xl:h-[calc(100vh-96px)] md:h-[calc(200vh-96px)] h-[calc(200vh-64px)]">
			<div className="bg-hero-buildings xl:absolute xl:bottom-0 xl:w-1/2  xl:left-0 bg-cover w-full xl:top-0 md:h-[calc(100vh-96px)] h-[calc(100vh-64px)] px-4">
				<div className="flex flex-col items-center  gap-12 text-center py-12 h-full relative justify-center">
					<div className="w-full mx-auto xl:mx-0">
						<h6>We deliver sublime services</h6>
						<h1>Consulting office</h1>
						<p className="max-w-80 mx-auto">
							A professional theme developed for contemporary
							business advisory and corporate websites.
						</p>
					</div>
					<div className="grid gap-2 text-center grid-cols-2">
						<CardHero
							icon={TargetIcon}
							title="Strategic Solutions"
						/>
						<CardHero
							icon={HomeIcon}
							title="Real Estate Consulting"
						/>
						<CardHero
							icon={RocketIcon}
							title="Business Launch Assistance"
						/>
						<CardHero
							icon={PersonIcon}
							title="Personalized Services"
						/>
					</div>
				</div>
			</div>
			<div className="xl:absolute xl:right-0 xl:top-0 xl:w-1/2 overflow-hidden xl:h-[calc(100vh-96px)] h-screen w-full z-0">
				<HeroSlider />
			</div>
		</section>
	);
}
