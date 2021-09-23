import React, { useState } from "react";
import "./FormLogin.css";
import axios from "axios";

export default function FormLogin() {
  // mise en place des states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // selection de la div error
  const Error = document.querySelector(".message.error");

  // fction login
  const login = () => {
    // envoie l'email, et le password à l'api

    axios
      .post("http://localhost:5000/api/user/login", {
        email,
        password,
        headers: { "Content-Type": "application/json" },
      })

      // recupere la response et la stock dans le local storage et nous redirige sur le chemain '/'
      .then((response) => {
        localStorage.setItem("Token", response.data.token);

        window.location = "/";
      })

      // affiche le message d'erreur
      .catch((err) => (Error.innerHTML = err.response.data));
  };

  // fonction qui se declenche à la soumission du formulaire,
  const handlelogin = (e) => {
    // enleve l'evenement par default
    e.preventDefault();
    // lance la fonction login
    login();
  };

  return (
    <div>
      <form action="" onSubmit={handlelogin} id="login-form">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="email error"></div>
        <br />
        <label htmlFor="password">Mot de passe</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="message error"></div>
        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
}
