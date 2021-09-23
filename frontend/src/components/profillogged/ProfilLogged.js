import React from "react";
import LeftNav from "../LeftNav/LeftNav";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../actions/user.actions";
import "./ProfilLogged.css";

export default function ProfilLogged() {
  // permet de récupérer la fonction dispatch au sein de notre composant afin de pouvoir dispatch des actions Redux.
  const dispatch = useDispatch();
  // useSelector connecte au store avec le userReducer
  const userData = useSelector((state) => state.userReducer);
  // lance la fonction au clic sur le bouton supprimer compte
  const handleDelete = () => {
    // supprime le compte
    dispatch(deleteUser());
    // on enleve le token du localstorage
    localStorage.removeItem("Token");
    //on renvoie vers le chemin '/profil'
    window.location = "/profil";
  };
  return (
    <div className="profilLogged-container">
      <LeftNav />
      <div className="profilForm-container">
        <div className="profilForm">
          <h3 className="titreprofil">Votre Profil</h3>
          <h4 className="label">Votre nom</h4>
          <p className="infoprofil">{userData.lastname}</p>
          <h4 className="label">Votre prénom</h4>
          <p className="infoprofil">{userData.firstname}</p>
          <h4 className="label">Votre email</h4>
          <p className="infoprofil">{userData.email}</p>
          <button
            onClick={() => {
              if (
                window.confirm(" Voulez-vous vraiment supprimer ce message ? ")
              )
                handleDelete();
            }}
            className="edit"
          >
            Supprimer le compte
          </button>
        </div>
      </div>
    </div>
  );
}
