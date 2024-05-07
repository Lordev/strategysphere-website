"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            grid: {
                color: "#737687", // Change grid color for X-axis
            },
            ticks: {
                color: "#c9cde0", // Change text color for X-axis scale
            },
        },
        y: {
            grid: {
                color: "#737687", // Change grid color for Y-axis
            },
            ticks: {
                color: "#c9cde0", // Change text color for X-axis scale
            },
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
    labels,
    datasets: [
        {
            data: [400, 820, 700, 850, 700, 550, 500],
            borderColor: "#b7891c",
            backgroundColor: "#c9cde0",
        },
        {
            fill: true,
            data: [300, 350, 600, 700, 500, 450, 250],
            borderColor: "#fff",
            backgroundColor: "#c9cde0",
        },
    ],
};

export default function LineChart() {
    return <Line options={options} data={data} />;
}
