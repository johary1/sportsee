import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.css";

/**
 *
 * @returns Header component.
 */
function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img className="logo" src={logo} alt="le logo" />
        </Link>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglage</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </nav>
    </header>
  );
}

export default Header;
