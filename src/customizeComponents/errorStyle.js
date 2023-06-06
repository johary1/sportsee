import React from "react";
import "./style/error.css";

const Main = (props) => (
  <main className="mainError">
    {React.Children.map(props.children, (child) => {
      if (child.type === "a") {
        return React.cloneElement(child, { className: "link" });
      }
      if (child.type === "p") {
        return React.cloneElement(child, { className: "paragraph" });
      }
      return child;
    })}
  </main>
);

const Title = (props) => <h1 className="titleError">{props.children}</h1>;

export { Main, Title };
