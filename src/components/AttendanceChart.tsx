"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AttendanceChart = ({ data }: { data: { name: string, present: number, absent: number }[] }) => {
    return (
        <ResponsiveContainer width="100%" height="90%">
            <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#DDD' />
                <XAxis dataKey="name" axisLine={false} tick={{ fill: "#D1D5DB" }} tickLine={false} />
                <YAxis axisLine={false} tick={{ fill: "#D1D5DB" }} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgrey" }} />
                <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                <Bar dataKey="present" fill="#FCE149" legendType='circle' radius={[10, 10, 0, 0]} />
                <Bar dataKey="absent" fill="#ABE7FF" legendType='circle' radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default AttendanceChart