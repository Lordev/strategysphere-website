import CardHero from "./CardHero";
import {
    TargetIcon,
    HomeIcon,
    RocketIcon,
    PersonIcon,
    ChevronDownIcon,
    BorderSolidIcon,
} from "@radix-ui/react-icons";
import HeroSlider from "./HeroSlider";

export default function Hero() {
    return (
        <section className="relative overflow-hidden 2xl:h-[calc(100vh-96px)] md:h-[calc(200vh-96px)] h-[calc(200vh-64px)]">
            <div className="bg-hero-buildings 2xl:absolute 2xl:bottom-0 2xl:w-1/2 2xl:min-w-[50rem] 2xl:left-0 bg-cover w-full 2xl:top-0 md:h-[calc(100vh-96px)] h-[calc(100vh-64px)] px-4">
                <div className="flex flex-col items-center  gap-20 text-center py-8 h-full relative justify-center">
                    <div className="w-full mx-auto 2xl:mx-0">
                        <h6>We deliver sublime services</h6>
                        <h1>Consulting office</h1>
                        <p className="max-w-80 mx-auto">
                            A professional theme developed for contemporary business
                            advisory and corporate websites.
                        </p>
                    </div>
                    <div className="grid gap-2 text-center grid-cols-2">
                        <CardHero icon={TargetIcon} title="Strategic Solutions" />
                        <CardHero icon={HomeIcon} title="Real Estate Consulting" />
                        <CardHero icon={RocketIcon} title="Business Launch Assistance" />
                        <CardHero icon={PersonIcon} title="Personalized Services" />
                    </div>
                    <div className="absolute bottom-8">
                        <BorderSolidIcon className="w-24 h-12 mx-auto" />
                        <ChevronDownIcon className="mx-auto -mt-4 w-8 h-8 sm:w-12 sm:h-12 animate-bounce" />
                    </div>
                </div>
            </div>
            <div className="2xl:absolute 2xl:right-0 2xl:top-0 2xl:w-1/2 overflow-hidden 2xl:h-[calc(100vh-96px)] h-screen w-full z-0">
                <HeroSlider />
            </div>
        </section>
    );
}
