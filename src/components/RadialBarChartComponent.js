import React from "react";
import { RadialBarChart, RadialBar } from "recharts";
import { USER_MAIN_DATA } from "../data/data";

const RadialBarChartComponent = () => {
  const getUserScores = (userId) => {
    const user = USER_MAIN_DATA.find((data) => data.id === userId);

    if (user) {
      return [{ name: "Score", score: user.score * 100 }];
    }

    return [];
  };

  return (
    <div
      style={{
        background: "#FBFBFB",
        borderRadius: "5px",
        padding: "10px",
        width: "258px",
        height: "263px",
      }}
    >
      <span style={{ marginTop: "100px" }}>Score</span>
      <RadialBarChart
        width={400}
        height={300}
        cx={150}
        cy={150}
        innerRadius="50%"
        barSize={10}
        fill="#e60000"
        data={getUserScores(12)}
        startAngle={90}
        endAngle={180}
      >
        <RadialBar
          minAngle={15}
          dataKey="score"
          label={{
            fill: "#000000",
            position: "center",
            width: "90px",
            formatter: (value) => `${value}% de votre objectif`,
          }}
          cornerRadius={10}
        />
      </RadialBarChart>
    </div>
  );
};

export default RadialBarChartComponent;
