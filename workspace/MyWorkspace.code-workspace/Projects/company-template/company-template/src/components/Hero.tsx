"use client";
import Card from "./Card";
import { FrameIcon } from "@radix-ui/react-icons";

export default function Hero() {
    return (
        <section className="h-screen relative before:bg-hero-buildings before:absolute before:w-1/2 before:left-0 before:top-0 before:bottom-0">
            <div className="grid grid-cols-[1fr_repeat(2,_minmax(900px,_1fr))_1fr] bg-[#424656] opacity-[.98] absolute inset-0 text-primary-foreground">
                <div className="h-screen col-start-2 ">
                    <div
                        className=" h-full
                flex flex-col justify-center items-start"
                    >
                        <div className="h-3/5 z-10 sel">
                            <div className="w-3/4">
                                <h6>We deliver sublime services</h6>
                                <h2>Consulting office</h2>
                                <p>
                                    A professional theme developed for contemporary
                                    business advisory and corporate websites.
                                </p>
                            </div>
                            <div className="mt-24  grid gap-8 text-center grid-cols-2">
                                <Card
                                    icon={FrameIcon}
                                    title="Service 1"
                                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                />
                                <Card
                                    icon={FrameIcon}
                                    title="Service 2"
                                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                />
                                <Card
                                    icon={FrameIcon}
                                    title="Service 3"
                                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                />
                                <Card
                                    icon={FrameIcon}
                                    title="Service 3"
                                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                />
                            </div>
                            <div className="mt-32">
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
                </div>
                <div className="col-start-3 col-span-4 overflow-hidden">
                    <div className="bg-hero-side bg-cover animate-zoom-top-right h-screen"></div>
                </div>
            </div>
        </section>
    );
}
