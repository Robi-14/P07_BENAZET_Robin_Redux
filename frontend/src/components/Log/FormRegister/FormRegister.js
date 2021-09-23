import React, { useState } from "react";
import "./FormRegister.css";
import axios from "axios";
import FormLogin from "../FormLogin/FormLogin";

export default function FormRegister() {
  // mise en place des states
  const [formSubmit, setFormSubmit] = useState(false);
  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Error = document.querySelector(".message.error");
  // fonction à la soumission du formulaire
  const handleRegister = async (e) => {
    // enleve l'evenement par default
    e.preventDefault();
    // envoie à l'api les infos
    await axios
      .post("http://localhost:5000/api/user/register", {
        lastname,
        firstname,
        email,
        password,
      })
      //si ok on passe formSubmit sur true
      .then((res) => {
        setFormSubmit(true);
      })
      //sinon on affiche l'erreur
      .catch((err) => (Error.innerHTML = err.response.data));
  };
  // si formSubmit est true on affiche le composant FormLoggin et le message d'inscription ok, sinon on affiche le formulaire d'inscription
  return (
    <>
      {formSubmit ? (
        <>
          <FormLogin />
          <h4 className="ok">Inscription reussi, veuillez-vous connecter!</h4>
        </>
      ) : (
        <form onSubmit={(e) => handleRegister(e)} id="register-form">
          <label htmlFor="name">Nom</label>
          <br />
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Name"
            id="name"
            value={lastname}
          />
          <br />
          <label htmlFor="firstname">Prenom</label>
          <br />
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="Firstname"
            id="firstname"
            value={firstname}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            id="email"
            value={email}
          />
          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Mot de passe"
            id="password"
            value={password}
          />
          <br />
          <div className="message error"></div>
          <input type="submit" value="S'inscrire" />
        </form>
      )}
    </>
  );
}
