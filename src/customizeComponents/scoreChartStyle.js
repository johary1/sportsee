import React from "react";
import "./style/scoreChart.css";

const Container = (props) => (
  <div className="containerScore">{props.children}</div>
);
const Title = (props) => <h2 className="titleScore">{props.children}</h2>;
const Text = (props) => <p className="textScore">{props.children}</p>;
const Score = (props) => <span className="scoreChart">{props.children}</span>;

export { Container, Title, Text, Score };
