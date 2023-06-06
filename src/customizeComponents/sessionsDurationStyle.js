import React from "react";
import "./style/sessionTool.css";

const Container = (props) => (
  <div className="containerSession">{props.children}</div>
);
const Text = (props) => <p className="textSession">{props.children}</p>;

export { Container, Text };
