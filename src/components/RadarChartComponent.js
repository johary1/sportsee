import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { USER_PERFORMANCE } from "../data/data";

const renderLegendText = (value) => {
  let text = "";
  if (value === "cardio") {
    text = "Cardio";
  } else if (value === "intensity") {
    text = "Intensité";
  } else if (value === "speed") {
    text = "Vitesse";
  } else if (value === "strength") {
    text = "Force";
  } else if (value === "endurance") {
    text = "Endurance";
  } else if (value === "energy") {
    text = "Energie";
  }

  return text;
};

const RadarChartComponent = () => {
  const getUserPerformance = (userId) => {
    const user = USER_PERFORMANCE.find((data) => data.userId === userId);

    if (user) {
      return user.data.map((performance) => ({
        kind: user.kind[performance.kind],
        value: performance.value,
      }));
    }

    return [];
  };

  return (
    <div
      style={{
        background: "#000000",
        color: "white",
        borderRadius: "5px",
        width: "258px",
        height: "263px",
        margin: "50px",
      }}
    >
      <RadarChart
        cx={130}
        cy={130}
        outerRadius={70}
        width={258}
        height={246}
        margin={{ top: -6 }}
        data={getUserPerformance(12)}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="kind"
          tickFormatter={renderLegendText}
          width={180}
          height={180}
        />
        <PolarRadiusAxis />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="#FF0000"
          fill="#FF0000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default RadarChartComponent;
