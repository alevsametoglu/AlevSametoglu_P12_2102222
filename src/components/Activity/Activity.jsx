import React from "react";
import "./Activity.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Activity = () => {
  return (
    <div className="activity">
      <BarChart
        width={950}
        height={320}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid horizontal="true" vertical="" />
        <XAxis
          dataKey="name"
          dx={-10}
          dy={-2}
          axisLine={false}
          tickLine={false}
        />
        <YAxis axisLine={false} tickLine={false} orientation="right" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
        <Bar dataKey="uv" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
      </BarChart>
    </div>
  );
};

export default Activity;
