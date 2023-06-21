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
import UserPerformanceModel from "../datamodel/UserPerformanceModel";

/**
 * Render a RadarChart with user performance data
 * @return {JSX}
 */
export default function UserPerformance() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserData("USER_PERFORMANCE", id);
      if (!response.data) return alert("Data error");

      const userPerformance = new UserPerformanceModel(response.data);
      setData(userPerformance.performance);
    };
    fetchData();
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
