import React from "react";
import "./style/barChart.css";

const Wrapper = (props) => <div className="wrapperBar">{props.children}</div>;
const Head = (props) => <div className="headBar">{props.children}</div>;
const Title = (props) => <h2 className="titleBar">{props.children}</h2>;
const Text = (props) => <p className="textBar">{props.children}</p>;
const Icon = (props) => <div className={`iconBar${props.color}`} />;
const Legend = (props) => <div className="legendBar">{props.children}</div>;
const Info = (props) => <div className="infoBar">{props.children}</div>;

export { Wrapper, Head, Title, Text, Icon, Legend, Info };
