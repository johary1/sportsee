import React from "react";
import {
  Container,
  Title,
  Text,
  Score,
} from "../customizeComponents/scoreChartStyle";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";

export default function ScoreChart({ data = {} }) {
  const score = [
    { value: data.todayScore || data.score },
    { value: 1 - (data.todayScore || data.score) },
  ];

  return (
    <Container>
      <Title>Score</Title>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={score}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
          >
            {score.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                cornerRadius={index === 0 ? 10 : 0}
                fill={index === 0 ? "#ff0000" : "#FBFBFB"}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Text>
        <Score>
          {score[0].value * 100}%
          <br />
        </Score>
        de votre
        <br /> objectif
      </Text>
    </Container>
  );
}

ScoreChart.propTypes = {
  data: PropTypes.object,
};
