import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "../../AppContext";
import Logout from "../../Log/Logout";
import "./Navbar.css";
// importation de Navlink  qui va permettre de diriger vers le chemin exact et d'activer la classe active sur le bouton
// uidContext pour recuperer l'uid

export default function Navbar() {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  return (
    <>
      <nav>
        <div className="nav-container">
          <NavLink exact to="/">
            <img
              src="./img/logoBlack.svg"
              alt="Logo groupomania"
              className="img-log"
            />
          </NavLink>
          {uid ? (
            <div className="profil">
              <NavLink exact to="/profil">
                <p className="welcome">
                  {userData.firstname} {userData.lastname}
                </p>
              </NavLink>
              <Logout />
            </div>
          ) : (
            <div className="profil">
              <NavLink exact to="/profil">
                <img src="./img/log-in.svg" alt="log-in" className="logo-log" />
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
