import React from "react";
import "./style/userAverage.css";

const Container = (props) => (
  <div className="containerAverage">{props.children}</div>
);
const Title = (props) => <h2 className="titleAverage">{props.children}</h2>;

export { Container, Title };
