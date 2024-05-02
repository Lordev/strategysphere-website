'use client'

import { useState, useEffect } from "react";

interface AnimatedCounter {
    countLimit: number;
}

const AnimatedCounter = ({ countLimit }: AnimatedCounter) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timeoutInterval = setTimeout(() => {
            if (count < countLimit) {
                setCount((prevCount) => prevCount + 1);
            }
        }, 5);

        return () => clearTimeout(timeoutInterval);
    }, [count, countLimit]);

    return <>{count}</>;
};

export default AnimatedCounter;
