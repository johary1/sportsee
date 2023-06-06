import React from "react";
import { NavLink } from "react-router-dom";
import { Main, Title } from "../customizeComponents/homeStyle";

export default function Home() {
  return (
    <Main>
      <Title>Choisissez un utilisateur</Title>
      <NavLink className="userName" to="user/12">
        Karl
      </NavLink>
      <NavLink className="userName" to="user/18">
        Cecilia
      </NavLink>
    </Main>
  );
}
