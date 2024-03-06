import Image from "next/image";
import KeyPoints from "./KeyPoints";
import SliderElement from "./SliderElement";
import StraightAnglePieChart from "./StraightAnglePieChart";

export default function HomeMain() {
    return (
        <>
            <div className="bg-foreground py-40 grid grid-cols-[1fr_minmax(1800px,_1fr)_1fr] text-primary">
                <div className="col-start-2 text-center">
                    <div className="container px-80 flex flex-col gap-4">
                        <h6 className="scroll-m-20 text-lg tracking-[.5rem] font-medium  text-[#B7891C]">
                            We deliver sublime services
                        </h6>
                        <h1 className="scroll-m-20 text-5xl tracking-tight  text-[#222]">
                            Trusted Partner of 5585 Clients
                        </h1>
                        <p className="mt-4 scroll-m-20 px-40">
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
                            <h4 className="font-semibold">Opportunities</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Fugit cumque culpa libero esse aperiam. Facere
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
                            <h4 className="font-semibold">Business Plan</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Fugit cumque culpa libero esse aperiam. Facere
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
                            <h4 className="font-semibold">Financial Gain</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Fugit cumque culpa libero esse aperiam. Facere
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
                            <h4 className="font-semibold">Opportunity gains</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Fugit cumque culpa libero esse aperiam. Facere
                                voluptatibus quisquam, nesciunt eum,{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full grid grid-cols-2 py-40 bg-earth bg-cover">
                <div className="col-start-1">
                    <Image
                        src={"/meetings-lowq.jpg"}
                        alt="professional advisory"
                        width={1800}
                        height={1200}
                        className="aspect-[1800/1200] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] overflow-clip max-w-[800px]"
                    />
                </div>
                <div className="col-start-2">
                    <div className="w-1/2">
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
                        <SliderElement />
                    </div>
                </div>
            </div>
            <div className="h-full gap-16 py-40">
                <div className="flex-col flex gap-4 text-center mb-40">
                    <h6 className="scroll-m-20 text-lg tracking-[.5rem] font-medium  text-[#B7891C]">
                        Financial reports
                    </h6>
                    <h1 className="scroll-m-20 text-5xl tracking-tight">
                        Expert business insights
                    </h1>
                    <p className="font-[inter text-base w-[40rem] mx-auto text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                        ducimus modi blanditiis ab, quas deserunt nulla officiis
                        cupiditate veritatis, illo assumenda veniam? Odit voluptates
                        voluptas vero obcaecati impedit! Amet, dignissimos.
                    </p>
                </div>
                <div className="grid grid-cols-[1fr,_repeat(3,_minmax(600px,_1fr))_1fr]">
                    <div className="col-start-2 px-20 text-center flex flex-col gap-4">
                        <StraightAnglePieChart />
                        <h4 className="text-2xl">Financial report for 2019</h4>
                        <p className="px-8 text-muted">
                            Illum cupiditate corrupti expedita non dolores sequi. Facere
                            voluptatibus quisquam, nesciunt eum.
                        </p>
                    </div>
                    <div className="col-start-3 px-20 text-center flex flex-col gap-4">
                        <StraightAnglePieChart />
                        <h4 className="text-2xl">Financial report for 2020</h4>
                        <p className="px-8 text-muted">
                            Illum cupiditate corrupti expedita non dolores sequi. Facere
                            voluptatibus quisquam, nesciunt eum.
                        </p>
                    </div>
                    <div className="col-start-4 px-20 text-center flex flex-col gap-4">
                        <StraightAnglePieChart />
                        <h4 className="text-2xl">Financial report for 2021</h4>
                        <p className="px-8 text-muted">
                            Illum cupiditate corrupti expedita non dolores sequi. Facere
                            voluptatibus quisquam, nesciunt eum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-full grid grid-cols-2 py-40 bg-earth bg-cover">
                <div className="col-start-1">
                    <Image
                        src={"/meetings-lowq.jpg"}
                        alt="professional advisory"
                        width={1800}
                        height={1200}
                        className="aspect-[1800/1200] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%, 100%_0%)] overflow-clip max-w-[800px]"
                    />
                </div>
                <div className="col-start-2">
                    <div className="w-1/2">
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
                        <SliderElement />
                    </div>
                </div>
            </div>
            <div className="relative -z-20 bg-office-buildings h-[70vh] bg-blend-screen bg-cover grid grid-cols-[1fr_minmax(1800px,_1fr)_1fr]">
                <div className="col-start-2 py-40 h-full before:absolute before:left-0 before:top-0 before:bottom-0 before:w-full before:bg-background before:-z-10 before:opacity-90">
                    <h1 className="text-5xl text-center">Key Points</h1>
                    <div className="mt-16">
                        <KeyPoints
                            image="/data-modelling.png"
                            title="Data Driven"
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit cumque culpa libero esse aperiam."
                        />
                    </div>
                </div>
            </div>

            <div></div>
        </>
    );
}
