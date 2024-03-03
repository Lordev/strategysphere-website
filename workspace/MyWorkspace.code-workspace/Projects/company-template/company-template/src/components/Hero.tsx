"use client";
import Card from "./Card";
import { FrameIcon } from "@radix-ui/react-icons";

export default function Hero() {
    return (
        <div className="h-screen relative bg-hero-buildings bg-cover overflow-hidden">
            <div className="h-screen skew-x-[120deg]">
                <div className="before:bg-[#424656] before:opacity-90 before:h-full before:w-full before:absolute mx-auto h-full w-3/4 flex flex-col justify-center items-center">
                    <div className="skew-x-[-120deg] h-1/2">
                        <div className="flex-col flex gap-4 w-2/4 mx-auto">
                            <h6 className="scroll-m-20 text-lg tracking-[.4rem] font-medium  text-[#C5A3A7]">
                                We deliver sublime services
                            </h6>
                            <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl text-[#fff]">
                                Consulting office
                            </h1>
                            <p className="text-[#ddd] font-[inter text-base">
                                A professional theme developed for contemporary business
                                advisory and corporate websites.
                            </p>
                        </div>
                        <div className="mt-24 grid grid-cols-4 gap-8">
                            <Card
                                icon={FrameIcon}
                                title="Service 1"
                                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                            />
                            <Card
                                icon={FrameIcon}
                                title="Service 2"
                                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                            />
                            <Card
                                icon={FrameIcon}
                                title="Service 3"
                                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                            />
                            <Card
                                icon={FrameIcon}
                                title="Service 4"
                                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                            />
                        </div>
                        <div className="mt-40">
                            <svg
                                className="mx-auto"
                                fill="none"
                                width="100px"
                                height="100px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M5 12H12H19"
                                        stroke="#C5A3A7"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width=".3"
                                    ></path>
                                </g>
                            </svg>
                            <svg
                                className="mx-auto animate-bounce duration-1000 -mt-8"
                                fill="#C5A3A7"
                                width="32px"
                                height="32px"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
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
        </div>
    );
}
