"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

ChartJS.register(ArcElement, Tooltip, Legend);

const StraightAnglePieChart = () => {
    const [chartData, setChartData] = useState();
    const [inViewRef, inView] = useInView();

    useEffect(() => {
        if (inView) {
            const data = {
                labels: ["Finances", "Equity", "Economy"],
                datasets: [
                    {
                        label: "%",
                        data: [50, 20, 30],
                        backgroundColor: ["#C4A3A5", "#8E6F72", "#A7AABC"],
                        borderColor: "#737687",
                        borderWidth: 1,
                        lineTension: 0.3,
                    },
                ],
            };

            const options = {
                plugins: {
                    legend: {
                        position: "bottom",
                        onClick: () => [],
                        useBorderRadius: false,
                        labels: {
                            padding: 40,
                            usePointStyle: true,
                            color: "#A7AABC",
                            align: "left",
                        },
                    },
                },
                animation: {
                    onComplete: () => {},
                    delay: () => 0, // No delay when using inView
                },
            };

            setChartData({ data, options });
        }
    }, [inView]);

    return (
        <div ref={inViewRef} className="max-w-[500px] mx-auto w-full">
            {chartData?.data && <Pie data={chartData.data} options={chartData.options} />}
        </div>
    );
};

export default StraightAnglePieChart;
