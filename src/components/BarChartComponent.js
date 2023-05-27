import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS } from "../data/data";

const BarChartComponent = () => {
  const getUserActivity = (userId) => {
    const user = USER_ACTIVITY.find((data) => data.userId === userId);
    const userAverageSessions = USER_AVERAGE_SESSIONS.find(
      (data) => data.userId === userId
    );

    if (user && userAverageSessions) {
      return user.sessions.map((session, index) => ({
        day: `${userAverageSessions.sessions[index].day}`,
        poids: session.kilogram,
        calories: session.calories,
      }));
    }

    return [];
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { poids, calories } = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "#e60000",
            color: "#ffffff",
            padding: "5px",
            width: "80px",
            textAlign: "center",
          }}
        >
          <p>{poids}</p>
          <p>{calories}</p>
        </div>
      );
    }

    return null;
  };

  const renderLegendIcon = (props) => {
    const { payload } = props;

    return (
      <svg width="10" height="10">
        <circle cx="5" cy="5" r="5" fill={payload.color} />
      </svg>
    );
  };

  const renderLegendText = (value) => {
    let text = "";
    if (value === "poids") {
      text = "Poids (kg)";
    } else if (value === "calories") {
      text = "Calories brulées (kCal)";
    }

    return <span style={{ color: "grey" }}>{text}</span>;
  };

  return (
    <BarChart width={800} height={300} data={getUserActivity(12)}>
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="day" axisLine={false} />
      <YAxis orientation="right" axisLine={false} />
      <Legend
        layout="horizontal"
        align="right"
        verticalAlign="top"
        iconType="circle"
        wrapperStyle={{ top: -25 }}
        icon={renderLegendIcon}
        formatter={renderLegendText}
      />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="poids" fill="#000000" radius={[20, 20, 0, 0]} barSize={5} />
      <Bar
        dataKey="calories"
        fill="#e60000"
        radius={[20, 20, 0, 0]}
        barSize={5}
      />
    </BarChart>
  );
};

export default BarChartComponent;
