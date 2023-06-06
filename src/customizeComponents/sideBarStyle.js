import React from "react";
import "./style/sideBar.css";

const Container = (props) => (
  <div className="containerSidebar">{props.children}</div>
);
const Nav = (props) => <div className="navSidebar">{props.children}</div>;
const Wrapper = (props) => (
  <div className="wrapperSidebar">
    {React.Children.map(props.children, (child) => {
      if (child.type === "a") {
        return React.cloneElement(child, { className: "linkSidebar" });
      }
      return child;
    })}
  </div>
);
const NavText = (props) => <p className="nav-text">{props.children}</p>;

export { Container, Nav, Wrapper, NavText };
