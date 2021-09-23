import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";
import "./App.css";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes/index";
import jwt_decode from "jwt-decode";

function App() {
  const [exp, setExp] = useState();
  // configuration et stockage du uid  qui va permettre d'identifier l'utilisateur
  const [uid, setUid] = useState();
  // permet de récupérer la fonction dispatch au sein de notre composant afin de pouvoir dispatch des actions Redux.
  const dispatch = useDispatch();
  // useEffect s'effectue chaque fois que uid , ou le dispatch change
  useEffect(() => {
    // recuperation du token dans le local storage
    const token = localStorage.getItem("Token");
    if (token) {
      // si token dans le local storage on le decode et on prend l'userId
      const decodedToken = jwt_decode(token);
      const exp = decodedToken.exp;
      setExp(exp);

      const userId = decodedToken.userId;
      // on modifie le state avec l'userId
      setUid(userId);

      // si on a un uid  alors on recupere l'utilisateur correspondant à l'userId
      if (uid) {
        dispatch(getUser(uid));
      }
      // verifie l'expiration du token , si expiré le retire du store et renvoie au login
      if (Date.now() >= exp * 1000) {
        localStorage.removeItem("Token");
        window.location = "/profil";
      }
    }
  }, [uid, dispatch, exp]);

  return (
    // affiche le composant Routes
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
