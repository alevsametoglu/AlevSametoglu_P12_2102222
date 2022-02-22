import React from "react";
import "./Information.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const Information = () => {
  return (
    <RadarChart
      className="radar-chart"
      cx={140}
      cy={150}
      outerRadius={100}
      width={300}
      height={300}
      data={data}
      dy={5}
      stroke="#FFFFFF"
    >
      <PolarGrid />
      <PolarAngleAxis
        className="text-information"
        stroke="white"
        dataKey="subject"
        domain={[0, 250]}
        axisLine={false}
        tickCount={6}
      />

      <Radar
        name="Mike"
        dataKey="A"
        stroke="none"
        fill="red"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};

export default Information;
