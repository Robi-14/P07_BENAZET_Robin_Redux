import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftNav.css";
// importation de Navlink  qui va permettre de diriger vers le chemin exact et d'activer la classe active sur le bouton
export default function LeftNav() {
  return (
    <div className="leftnav-container">
      <div className="icons">
        <NavLink to="/" exact activeClassName="active-leftnav">
          <img src="./img/home.svg" alt="Logo Home" className="logo-leftnav" />
        </NavLink>
        <br />
        <NavLink to="/profil" exact activeClassName="active-leftnav">
          <img
            src="./img/profil.svg"
            alt="Logo profil"
            className="logo-leftnav"
          />
        </NavLink>
      </div>
    </div>
  );
}
