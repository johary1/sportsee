import React from "react";
import "./style/activity.css";

const Container = (props) => (
  <div className="containerActivity">{props.children}</div>
);
const Text = (props) => <p className="textActivity">{props.children}</p>;

export { Container, Text };
