import React from "react";
import "./style/keyData.css";

const Wrapper = (props) => <div className="wrapperKey">{props.children}</div>;
const Infos = (props) => <div className="infos">{props.children}</div>;
const InfosData = (props) => <p className="infos-data">{props.children}</p>;
const InfosText = (props) => <p className="infos-text">{props.children}</p>;

export { Wrapper, Infos, InfosData, InfosText };
