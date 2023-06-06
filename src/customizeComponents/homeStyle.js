import React from "react";
import "./style/home.css";

const Main = (props) => (
  <main className="mainHome">
    {React.Children.map(props.children, (child) => {
      if (child.type === "a") {
        return React.cloneElement(child, { className: "linkHome" });
      }
      return child;
    })}
  </main>
);

const Title = (props) => <h2 className="titleHome">{props.children}</h2>;

export { Main, Title };
