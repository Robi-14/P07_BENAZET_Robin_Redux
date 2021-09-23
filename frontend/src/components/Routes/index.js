import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profil from "../../pages/Profil/Profil";
import Home from "../../pages/Home/Home";
import Navbar from "../../components/Header/Navbar/Navbar";
import { Redirect } from "react-router-dom";
// on importe nos pages

export default function Index() {
  return (
    // BrowserRouter permet des routes dynamique
    // si le chemain correspond à '/' on affiche la page Home
    // si le chemain exact correspond à '/profil' on affiche la page Profil
    // si le chemain est faux (ex:'/123' cela renvoie sur le chemain "/")

    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
