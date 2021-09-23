import React from "react";
import "./Logout.css";

export default function Logout() {
  // au clic sur  le logo logout ,
  const logout = () => {
    //enleve le token du localstorage et redirige vers le chemin '/profil'
    localStorage.removeItem("Token");

    window.location = "/profil";
  };

  return (
    <>
      <img
        src="./img/log-out.svg"
        alt="log-out"
        className="logo-log"
        onClick={logout}
      />
    </>
  );
}
