"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounter {
    countLimit: number;
}

const AnimatedCounter = ({ countLimit }: AnimatedCounter) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView();

    useEffect(() => {
        let timeoutInterval: NodeJS.Timeout | null = null;
        if (inView) {
            timeoutInterval = setTimeout(() => {
                if (count < countLimit) {
                    setCount((prevCount) => prevCount + 1);
                }
            }, 10);
        }
        return () => {
            if (timeoutInterval) {
                clearTimeout(timeoutInterval);
            }
        };
    }, [count, countLimit, inView]);

    return <span ref={ref}>{inView && count}</span>;
};

export default AnimatedCounter;
