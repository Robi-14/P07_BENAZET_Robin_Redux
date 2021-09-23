import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";

export default function Deletecard(props) {
  // permet de récupérer la fonction dispatch au sein de notre composant afin de pouvoir dispatch des actions Redux.
  const dispatch = useDispatch();
  // au click sur l'image de poubelle lance la fonction
  const deleteQuote = () => {
    // on efface le post correspondant à l'id du post
    dispatch(deletePost(props.id));
  };

  return (
    <div
      onClick={() => {
        if (window.confirm(" Voulez-vous vraiment supprimer ce message ? "))
          deleteQuote();
      }}
    >
      <img src="./img/trash.svg" alt="delete" className="btn-img" />
    </div>
  );
}
