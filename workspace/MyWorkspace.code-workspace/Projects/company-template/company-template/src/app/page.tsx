"use client";

import Hero from "@/components/Hero";
import Image from "next/image";
import KeyPoints from "@/components/KeyPoints";
import StraightAnglePieChart from "@/components/StraightAnglePieChart";
import QuoteSlider from "@/components/QuoteSlider";
import Button from "@/components/Button";

export default function Home() {
    return (
        <>
            <Hero />
            <section className="bg-foreground py-40 grid grid-cols-[1fr_minmax(1800px,_1fr)_1fr] text-primary">
                <div className="col-start-2 text-center">
                    <div className="w-2/4 mx-auto px-20">
                        <h6>We deliver sublime services</h6>
                        <h1>Trusted Partner of 5585 Clients</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                            deserunt similique error eaque harum, recusandae ducimus
                            voluptatum aliquam quod.
                        </p>
                    </div>
                    <div className="flex gap-8 mt-16 justify-center items-center *:flex *:items-center *:flex-col *:gap-4 px-80">
                        <div>
                            <Image
                                width={50}
                                height={50}
                                src={"/portfolio.png"}
                                alt="portfolio image"
                            />
                            <h4>Opportunities</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit.Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Fugit cumque culpa libero esse aperiam. Facere
                                voluptatibus quisquam, nesciunt eum,{" "}
                            </p>
                        </div>
                        <div>
                            <Image
                                width={50}
                                height={50}
                                src={"/portfolio-analysis.png"}
                                alt="portfolio image"
                            />
                            <h4>Business Plan</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit.Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Fugit cumque culpa libero esse aperiam. Facere
                                voluptatibus quisquam, nesciunt eum,{" "}
                            </p>
                        </div>
                        <div>
                            <Image
                                width={50}
                                height={50}
                                src={"/financial-profit.png"}
                                alt="portfolio image"
                            />
                            <h4>Financial Gain</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit.Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Fugit cumque culpa libero esse aperiam. Facere
                                voluptatibus quisquam, nesciunt eum,{" "}
                            </p>
                        </div>
                        <div>
                            <Image
                                width={50}
                                height={50}
                                src={"/briefcase.png"}
                                alt="portfolio image"
                            />
                            <h4>Opportunity gains</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit.Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Fugit cumque culpa libero esse aperiam. Facere
                                voluptatibus quisquam, nesciunt eum,{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-full relative grid grid-cols-2 py-40 before:bg-abstract before:absolute before:bg-cover before:h-full before:w-1/2 before:bg-no-repeat before:left-1/2 before:-z-20 before:opacity-5">
                <div className="col-start-1">
                    <Image
                        src={"/meetings-lowq.jpg"}
                        alt="professional advisory"
                        width={1800}
                        height={1200}
                        className="aspect-[1800/1200] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] overflow-clip max-w-[800px]"
                    />
                </div>
                <div className="col-start-2 w-1/2">
                    <svg
                        fill="#000000"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-20 h-20 fill-accent mb-16"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>quote</title>{" "}
                            <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>{" "}
                        </g>
                    </svg>
                    <QuoteSlider />
                </div>
            </section>
            <section className="h-full gap-16 py-40">
                <div className="text-center mb-40 w-2/4 mx-auto px-40">
                    <h6>Financial reports</h6>
                    <h1>Expert business insights</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                        ducimus modi blanditiis ab, quas deserunt nulla officiis
                        cupiditate veritatis, illo assumenda veniam? Odit voluptates
                        voluptas vero obcaecati impedit! Amet, dignissimos.
                    </p>
                </div>
                <div className="grid grid-cols-[1fr,_repeat(3,_minmax(600px,_1fr))_1fr]">
                    <div className="col-start-2 px-20 text-center flex flex-col gap-4">
                        <StraightAnglePieChart />
                        <h4>Financial report for 2019</h4>
                        <p className="text-muted">
                            Illum cupiditate corrupti expedita non dolores sequi. Facere
                            voluptatibus quisquam, nesciunt eum.
                        </p>
                    </div>
                    <div className="col-start-3 px-20 text-center flex flex-col gap-4">
                        <StraightAnglePieChart />
                        <h4>Financial report for 2020</h4>
                        <p className="text-muted">
                            Illum cupiditate corrupti expedita non dolores sequi. Facere
                            voluptatibus quisquam, nesciunt eum.
                        </p>
                    </div>
                    <div className="col-start-4 px-20 text-center flex flex-col gap-4">
                        <StraightAnglePieChart />
                        <h4>Financial report for 2021</h4>
                        <p>
                            Illum cupiditate corrupti expedita non dolores sequi. Facere
                            voluptatibus quisquam, nesciunt eum.
                        </p>
                    </div>
                </div>
            </section>
            <section className="h-full relative grid grid-cols-2 py-40 before:absolute before:bg-earth before:bg-cover before:h-full before:inset-0 before:opacity-25 before:bg-no-repeat before:-z-20 justify-items-end">
                <div className="col-start-1 flex flex-col gap-4 justify-center items-start w-2/4">
                    <h6>We deliver sublime services</h6>
                    <h2>
                        The best chance to expand your{" "}
                        <span className="text-[#B7891C]"> business ventures</span>
                    </h2>
                    <Button title="Contact us" />
                </div>
                <div className="col-start-2">
                    <Image
                        src={"/tech-advice.jpg"}
                        alt="professional advisory"
                        width={1800}
                        height={1200}
                        className="aspect-[1800/1200] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] overflow-clip max-w-[800px]"
                    />
                </div>
            </section>
            <section className="relative -z-20 bg-office-buildings h-full bg-blend-screen bg-cover grid grid-cols-[1fr_minmax(1800px,_1fr)_1fr] py-40">
                <div className="col-start-2 h-full before:absolute before:left-0 before:top-0 before:bottom-0 before:w-full before:bg-background before:-z-10 before:opacity-[.95]">
                    <div className="flex flex-col gap-y-4 justify-center text-center">
                        <h6>Key Features</h6>
                        <h1 className="text-[#fff]">Grow in various ways</h1>
                    </div>
                    <div className="col-start-2 col-span-3 grid grid-cols-4 gap-x-16  gap-y-20 opacity-90 mt-40">
                        <KeyPoints
                            image="/promotion-application.png"
                            title="Data Driven"
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <KeyPoints
                            image="/workflow.png"
                            title="Data Driven"
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <KeyPoints
                            image="/community.png"
                            title="Data Driven"
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <KeyPoints
                            image="/meeting.png"
                            title="Data Driven"
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <KeyPoints
                            image="/vision.png"
                            title="Data Driven"
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <KeyPoints
                            image="/data.png"
                            title="Data Driven"
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <KeyPoints
                            image="/briefcase.png"
                            title="Data Driven"
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <KeyPoints
                            image="/brainstorming.png"
                            title="Data Driven"
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <KeyPoints
                            image="/consultation.png"
                            title="Data Driven"
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <KeyPoints
                            image="/data-modelling.png"
                            title="Data Driven"
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <KeyPoints
                            image="/goal.png"
                            title="Data Driven"
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <KeyPoints
                            image="/promotion.png"
                            title="Data Driven"
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        />
                    </div>
                </div>
            </section>
            <section className="bg-foreground py-8 text-end text-primary">
                <h2 className="mr-16">
                    Your company{`’`}s future with us, guaranteed success.
                </h2>
            </section>
        </>
    );
}
