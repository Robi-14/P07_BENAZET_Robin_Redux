import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import { useDispatch } from "react-redux";
import { deleteComment, edditComment } from "../../actions/comment.action";
import { getComments } from "../../actions/comment.action";

export default function EditDeleteComment({ comment, postId }) {
  // mise en place des states
  const [isAuthor, setIsAuthor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  //on recupere l'userId
  const uid = useContext(UidContext);
  // permet de récupérer la fonction dispatch au sein de notre composant afin de pouvoir dispatch des actions Redux.
  const dispatch = useDispatch();

  // à la soumission du fomulaire
  const handleEdit = (e) => {
    // on retire l'evenement par defaut au clic sur le bouton
    e.preventDefault();
    // si on a modifier le message du commentaire:
    if (text) {
      // On edit le commentaire avec en parametre le posId, le comment Id, et le text
      dispatch(edditComment(postId, comment.id, text))
        // on affiche à nouveau les commentaires
        .then(() => dispatch(getComments()));
      // on rinitialise le state text
      setText("");
      // et on passe le state edit sur false
      setEdit(false);
    }
  };

  // au clic sur l'image poubelle declenche l'alerte window => si oui ,declanche la fonction
  const handleDelete = () => {
    // supprime le commentaire avec en parametre le postId et comment.id
    dispatch(deleteComment(postId, comment.id))
      // on affiche à nouveau les commentaires
      .then(() => dispatch(getComments()));
  };

  //useEffect s'effectue chaque fois que uid ,comment.userId change
  useEffect(() => {
    // check si l'userid, est egal au comment.userId si oui , passe isAuthor à true
    const checkAuthor = () => {
      if (uid === comment.userId) {
        setIsAuthor(true);
      }
    };
    // lance la fonction checkAutor
    checkAuthor();
  }, [uid, comment.userId]);
  return (
    <div>
      {isAuthor && edit === false && (
        <div className="edit-comment">
          <div onClick={() => setEdit(!edit)}>
            <img src="./img/edit.svg" alt="edit" className="btn-img" />
          </div>
          <div
            onClick={() => {
              if (
                window.confirm(" Voulez-vous vraiment supprimer ce message ? ")
              )
                handleDelete();
            }}
          >
            <img src="./img/trash.svg" alt="delete" className="btn-img" />
          </div>
        </div>
      )}
      {isAuthor && edit && (
        <form action="" onSubmit={handleEdit} className="edit-comment-form">
          <input
            type="text"
            name="text"
            className="textcomment edit-comment"
            onChange={(e) => setText(e.target.value)}
            defaultValue={comment.content}
          />
          <div className="edit-btn">
            <label
              htmlFor="text"
              onClick={() => setEdit(!edit)}
              className="label-edit"
            >
              annuler
            </label>

            <input type="submit" value="Modifier" className="submit-edit" />
          </div>
        </form>
      )}
    </div>
  );
}
