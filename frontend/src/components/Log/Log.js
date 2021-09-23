import React, { useState } from "react";
import FormLogin from "./FormLogin/FormLogin";
import FormRegister from "./FormRegister/FormRegister";
import "./Log.css";

export default function Log() {
  // mise en place des states
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(true);

  // fonction  affichage modal au clic sur : s'inscrire ou se connecter
  const handleModal = (e) => {
    // si e.target.id correspond à register alors on passe loginModal sur false et registerModal sur True
    if (e.target.id === "register") {
      setLoginModal(false);
      setRegisterModal(true);
      // si e.target.id correspond à login alors on passe registerModal sur false et loginModal sur true
    } else if (e.target.id === "login") {
      setRegisterModal(false);
      setLoginModal(true);
    }
  };

  // si registerModal est true , on affiche le composant FormRegister
  // si LoginModal est true , on affiche le composant LoginModal
  return (
    <div>
      <div className="log-form">
        <div className="form-container">
          <ul>
            <li
              onClick={handleModal}
              id="register"
              className={registerModal ? "active-btn" : null}
            >
              S'inscrire
            </li>
            <li
              onClick={handleModal}
              id="login"
              className={loginModal ? "active-btn" : null}
            >
              Se connecter
            </li>
          </ul>
          {registerModal && <FormRegister />}
          {loginModal && <FormLogin />}
        </div>
      </div>
    </div>
  );
}
