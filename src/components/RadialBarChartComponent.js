import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import { USER_MAIN_DATA } from "../data/data";

const RadialBarChartComponent = () => {
  const getUserScores = (userId) => {
    const user = USER_MAIN_DATA.find((data) => data.id === userId);

    if (user) {
      return [{ name: "Score", score: user.score }];
    }

    return [];
  };

  return (
    <div
      style={{
        background: "grey",
        color: "white",
        borderRadius: "5px",
        width: "258px",
        height: "263px",
      }}
    >
      <RadialBarChart
        width={400}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={getUserScores(12)}
      >
        <RadialBar minAngle={15} dataKey="score" />
        <Legend layout="vertical" verticalAlign="right" />
      </RadialBarChart>
    </div>
  );
};

export default RadialBarChartComponent;
