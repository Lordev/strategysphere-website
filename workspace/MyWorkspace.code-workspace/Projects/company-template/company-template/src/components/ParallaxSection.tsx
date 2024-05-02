"use client";

import KeyPoints from "@/components/KeyPoints";
import { Parallax } from "react-parallax";

export default function ParallaxSection() {
    return (
        <Parallax
            bgImage="/office-buildings.jpg"
            bgImageAlt="office buildings"
            strength={300}
            bgClassName="object-cover"
        >
            <div className="py-20 sm:py-40 container">
                <div className="flex flex-col gap-y-4 justify-center text-center">
                    <h6>Key Features</h6>
                    <h1 className="text-[#fff]">Grow in various ways</h1>
                </div>
                <div className="col-start-2 col-span-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-x-16  sm:gap-y-20 opacity-90 sm:mt-40 mt-20 *:mb-8 gap-y-8">
                    <KeyPoints
                        image="/promotion-application.png"
                        title="Strategy Consulting"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <KeyPoints
                        image="/workflow.png"
                        title="Solutions Provider"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <KeyPoints
                        image="/community.png"
                        title="Advisory Services"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <KeyPoints
                        image="/meeting.png"
                        title="Innovation Hub"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <KeyPoints
                        image="/vision.png"
                        title="Growth Partners"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <KeyPoints
                        image="/data.png"
                        title="Optimization Experts"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <KeyPoints
                        image="/briefcase.png"
                        title="Transformational Consulting"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <KeyPoints
                        image="/brainstorming.png"
                        title="Excellence Delivery"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <KeyPoints
                        image="/consultation.png"
                        title="Insightful Analysis"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <KeyPoints
                        image="/data-modelling.png"
                        title="Impactful Solutions"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <KeyPoints
                        image="/goal.png"
                        title="Performance Improvement"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <KeyPoints
                        image="/promotion.png"
                        title="Agile Consulting"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                </div>
            </div>
        </Parallax>
    );
}
