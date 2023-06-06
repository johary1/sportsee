import React from "react";
import "./style/userMain.css";

const Main = (props) => <main className="main" {...props} />;
const Container = (props) => <div className="containerMain" {...props} />;
const Content = (props) => <div className="content" {...props} />;
const BottomChart = (props) => <div className="bottom-chart" {...props} />;

export { Main, Container, Content, BottomChart };
