import React from "react";
import { Head, Nav } from "../customizeComponents/headerStyle";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <Head>
      <NavLink to="/">
        <img src={logo} alt="sportSee" aria-label="logo sportSee" />
      </NavLink>
      <Nav>
        <NavLink className="link-header" to="/">
          Accueil
        </NavLink>
        <NavLink className="link-header" to="#">
          Profil
        </NavLink>
        <NavLink className="link-header" to="#">
          Réglage
        </NavLink>
        <NavLink className="link-header" to="#">
          Communauté
        </NavLink>
      </Nav>
    </Head>
  );
}
