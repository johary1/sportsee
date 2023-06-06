import React from "react";
import "./style/header.css";

const Head = (props) => (
  <header className="headHeader">
    {React.Children.map(props.children, (child) => {
      if (child.type === "img") {
        return React.cloneElement(child, { className: "logoHeader" });
      }
      return child;
    })}
  </header>
);

const Nav = (props) => (
  <nav className="navHeader">
    {React.Children.map(props.children, (child) => {
      if (child.type === "a") {
        return React.cloneElement(child, { className: "linkHeader" });
      }
      return child;
    })}
  </nav>
);

export { Head, Nav };
