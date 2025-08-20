"use client";
import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CounterProps {
    endtime: number;
}

export default function Counter({ endtime }: CounterProps) {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [inViewRef, inView] = useInView();

    if (inView && !hasAnimated) {
        setHasAnimated(true);
    }

    return (
        <>
            <span ref={inViewRef}>{hasAnimated ? <CountUp end={endtime} /> : ""}</span>
        </>
    );
}
