import React from "react";
import { LineChart, Line, XAxis, Tooltip, Legend } from "recharts";
import { USER_AVERAGE_SESSIONS } from "../data/data";

const LineChartComponent = () => {
  const getUserAverageSessions = (userId) => {
    const user = USER_AVERAGE_SESSIONS.find((data) => data.userId === userId);

    if (user) {
      const dayLetters = ["L", "M", "M", "J", "V", "S", "D"];
      return user.sessions.map((session) => ({
        name: dayLetters[session.day - 1],
        sessionLength: session.sessionLength,
      }));
    }

    return [];
  };

  const CustomLegend = (props) => {
    return <div style={{ color: "grey" }}>Durée moyenne des sessions</div>;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            width: "50px",
            height: "35px",
            fontSize: "14px",
            fontWeight: "bolder",
          }}
        >
          <p style={{ textAlign: "center" }}>{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      style={{
        background: "#e60000",
        color: "white",
        borderRadius: "5px",
        width: "258px",
        height: "263px",
      }}
    >
      <LineChart width={250} height={258} data={getUserAverageSessions(12)}>
        <XAxis dataKey="name" axisLine={false} />
        <Tooltip content={CustomTooltip} />
        <Legend
          layout="horizontal"
          align="left"
          verticalAlign="top"
          wrapperStyle={{ top: 10, left: 20 }}
          content={<CustomLegend />}
        />
        <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
