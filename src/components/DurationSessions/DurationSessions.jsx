import React from "react";
import "./DurationSessions.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "M",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "S",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "W",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "T",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "F",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "S",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "S",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const DurationSessions = () => {
  return (
    <div className="duration-session">
      <header className="durationSessions__header">
        <h1>Durée moyenne des sessions</h1>
      </header>
      <LineChart
        className="duration-chart"
        width={300}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" stroke="white" tickLine={false} dy={2} />
        {/* <YAxis /> */}
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Line
          className="line-information"
          type="monotone"
          dataKey="pv"
          stroke="white"
          dot={false}
          activeDot={{ r: 7 }}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </div>
  );
};
export default DurationSessions;
