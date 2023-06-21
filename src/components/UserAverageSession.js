import React, { useState, useEffect } from "react";
import { Container } from "../customizeComponents/userPerformanceStyle";
import { getUserMockedData } from "../utils/getUserMockedData";
import { useParams } from "react-router";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import UserAverageSessionModel from "../datamodel/UserAverageSessionModel";

/**
 * Render a LineChart with user average session data
 * @return {JSX}
 */
export default function UserAverageSession() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserMockedData("USER_AVERAGE_SESSIONS", id);
      if (!response.data) return alert("Data error");

      const userAverageSession = new UserAverageSessionModel(response.data);
      setData(userAverageSession.sessions);
    };
    fetchData();
  }, [id]);

  if (data.length === 0) return null;

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FF0101"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
