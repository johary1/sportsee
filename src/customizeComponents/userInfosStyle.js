import React from "react";
import "./style/userInfo.css";

const Head = (props) => (
  <header className="headUserInfo">
    {React.Children.map(props.children, (child) => {
      if (child.type === "h1") {
        return React.cloneElement(child, { className: "titleUserInfo" });
      }
      return child;
    })}
  </header>
);

const Name = (props) => <span className="nameUserInfo">{props.children}</span>;

export { Head, Name };
