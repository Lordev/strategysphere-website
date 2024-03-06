"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StraightAnglePieChart() {
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
                onclick: () => [],
                useBorderRadius: false,
                labels: {
                    padding: 40,
                    usePointStyle: true,
                    color: "#A7AABC",
                    align: "left",
                },
            },
        },
    };

    return <Pie data={data} options={options} />;
}
