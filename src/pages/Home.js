import React from "react";
import { NavLink } from "react-router-dom";
import "../pages/style/HomeStyle.css";
import DataSource from "../components/DataSource/DataSource";

export default function Home() {
  return (
    <React.Fragment>
      <p className="welcome">
        Bienvenue sur <strong>SportSee !</strong>
      </p>
      <p className="paragraph">Choisissez un utilisateur</p>

      <NavLink className="userName" to="user/12">
        Karl DOVINEAU
      </NavLink>
      <NavLink className="userName" to="user/18">
        Cecilia RATOREZ
      </NavLink>
      <DataSource />
    </React.Fragment>
  );
}
