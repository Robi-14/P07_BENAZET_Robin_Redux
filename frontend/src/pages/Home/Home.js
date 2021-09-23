import React, { useContext } from "react";
import { UidContext } from "../../components/AppContext";
import LeftNav from "../../components/LeftNav/LeftNav";
import PostForm from "../../components/Post/PostForm";
import Thread from "../../components/Thread/Thread";
import Profil from "../Profil/Profil";
import "./Home.css";
//import de nos composants
export default function Home() {
  //on recupere l'userId
  const uid = useContext(UidContext);
  return (
    //si uid est true alors on affiche les composants du mur du reseau social ,
    //sinon on affiche le composant profil qui renvoie vers l'identification ou l'inscription
    <div>
      {uid ? (
        <div className="home">
          <LeftNav />
          <div className="main">
            <PostForm />
            <Thread />
          </div>
        </div>
      ) : (
        <Profil />
      )}
    </div>
  );
}
