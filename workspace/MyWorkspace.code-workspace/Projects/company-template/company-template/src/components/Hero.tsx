import Card from "./Card";
import { TargetIcon, HomeIcon, RocketIcon, PersonIcon } from "@radix-ui/react-icons";
import HeroSlider from "./HeroSlider";

export default function Hero() {
    return (
        <section className="relative" style={{ height: "calc(100vh - 86px)" }}>
            <div className="text-primary-foreground z-20 bg-hero-buildings 2xl:absolute 2xl:bottom-0 2xl:w-1/2 2xl:min-w-[50rem] 2xl:left-0 bg-cover w-full 2xl:top-0 h-full">
                <div className="flex flex-col items-center h-full justify-evenly gap-20 text-center py-8">
                    <div className="w-full mx-auto 2xl:mx-0 ">
                        <h6>We deliver sublime services</h6>
                        <h2>Consulting office</h2>
                        <p>
                            A professional theme developed for contemporary business
                            advisory and corporate websites.
                        </p>
                    </div>
                    <div className="grid gap-2 text-center sm:grid-cols-2">
                        <Card
                            icon={TargetIcon}
                            title="Service 1"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <Card
                            icon={HomeIcon}
                            title="Service 2"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <Card
                            icon={RocketIcon}
                            title="Service 3"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <Card
                            icon={PersonIcon}
                            title="Service 3"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        />
                    </div>
                    <div>
                        <svg
                            className="mx-auto"
                            fill="none"
                            width="100px"
                            height="100px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M5 12H12H19"
                                    stroke="#fff"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth=".3"
                                ></path>
                            </g>
                        </svg>
                        <svg
                            className="mx-auto animate-bounce duration-1000 -mt-8"
                            fill="#fff"
                            width="32px"
                            height="32px"
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z"></path>{" "}
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="2xl:absolute 2xl:right-0 2xl:top-0 2xl:w-1/2 overflow-hidden h-screen w-full z-0">
                <HeroSlider />
            </div>
        </section>
    );
}
