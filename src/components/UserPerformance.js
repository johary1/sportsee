import React, { useState, useEffect } from "react";
import { Container } from "../customizeComponents/userPerformanceStyle";
import { getUserData } from "../utils/getUserData";
import { useParams } from "react-router";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * Render a RadarChart with user performance data
 * @return {JSX}
 */

export default function UserPerformance() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const request = await getUserData("USER_PERFORMANCE", id);
      if (!request) return alert("data error");
      const formatData = request.data.data.map((data) => {
        switch (data.kind) {
          case 1:
            return { ...data, kind: "Intensité" };
          case 2:
            return { ...data, kind: "Vitesse" };
          case 3:
            return { ...data, kind: "Force" };
          case 4:
            return { ...data, kind: "Endurance" };
          case 5:
            return { ...data, kind: "Energie" };
          case 6:
            return { ...data, kind: "Cardio" };
          default:
            return { ...data };
        }
      });
      setData(formatData);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  );
}
