import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Title,
} from "../customizeComponents/userAverageSessionStyle";
import { useParams } from "react-router";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import SessionsDuration from "./SessionsDuration";
import UserAverageSessionModel from "../datamodel/UserAverageSessionModel";
import { IS_MOCK } from "../constants";
import { getUserApiData } from "../utils/getUserApiData";
import { getUserMockedData } from "../utils/getUserMockedData";

/**
 * Render a LineChart with user average sessions Data
 * @return {JSX}
 */
export default function UserAverageSessions() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const lineChartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      let request;

      if (IS_MOCK) {
        request = await getUserMockedData(id);
      } else {
        request = await getUserApiData(id);
      }

      if (!request) {
        alert("Error fetching data");
        return;
      }

      const averageSessionModel = new UserAverageSessionModel(
        request.data.averageSessions
      );
      setData(averageSessionModel.sessions);
    };

    fetchData();
  }, [id]);

  const handleMouseMove = (e) => {
    if (e.isTooltipActive === true && lineChartRef.current !== null) {
      const div = lineChartRef.current.container;
      const windowWidth = div.clientWidth;
      const mouseXpercentage = Math.round(
        (e.activeCoordinate.x / windowWidth) * 100
      );
      div.style.background = `linear-gradient(90deg, rgba(255,1,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(255,1,1) 100%)`;
      div.style.borderRadius = "0.5rem";
    }
  };

  if (data.length === 0) {
    return null;
  }

  return (
    <Container>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          ref={lineChartRef}
          data={data}
          strokeWidth={1}
          onMouseMove={handleMouseMove}
        >
          <XAxis
            type="category"
            dataKey="name"
            tickLine={true}
            stroke="red"
            padding={{ right: 5, left: 5 }}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.5 }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip content={<SessionsDuration />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
