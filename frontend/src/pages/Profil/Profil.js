import React, { useContext } from "react";
import Log from "../../components/Log/Log";
import "./Profil.css";
import { UidContext } from "../../components/AppContext";
import ProfilLogged from "../../components/profillogged/ProfilLogged";

export default function Profil() {
  //on recupere l'userId
  const uid = useContext(UidContext);

  // si uid est true alors on affiche le composant ProfilLogged, sinon on affiche le composant Log
  return (
    <div className="profil-page">
      {uid ? (
        <ProfilLogged />
      ) : (
        <div className="log-container">
          <div className="log">
            <Log />
          </div>
          <div className="img-container">
            <img
              src="./img/icon-left-font.svg"
              alt="Logo_groupomania"
              className="logo-groupo"
            />
          </div>
        </div>
      )}
    </div>
  );
}
