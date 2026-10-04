import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo" aria-label="Q´ Comemos, inicio">
          <img className="logo-image" src={logo} alt="" />
          <span>Q´ Comemos</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/productos">Menú</NavLink>
        </div>

        <CartWidget />

      </div>
    </nav>
  );
};

export default NavBar;
