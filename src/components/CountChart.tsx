"use client";
import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Total",
        count: 110,
        fill: "white",
    },
    {
        name: "Girls",
        count: 60,
        fill: "#FCE877",
    },
    {
        name: "Boys",
        count: 50,
        fill: "#D1F2FF",
    },
];

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-skyLight rounded-full" />
                    <h1 className="font-bold">50</h1>
                    <h2 className="text-xs text-gray-300">Boys (45%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-yellowLight rounded-full" />
                    <h1 className="font-bold">60</h1>
                    <h2 className="text-xs text-gray-300">Girls (55%)</h2>
                </div>
            </div>
        </div>
    );
};

export default CountChart;