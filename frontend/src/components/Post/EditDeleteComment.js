import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import { useDispatch } from "react-redux";
import { deleteComment, edditComment } from "../../actions/comment.action";
import { getComments } from "../../actions/comment.action";

export default function EditDeleteComment({ comment, postId }) {
  const [isAuthor, setIsAuthor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(edditComment(postId, comment.id, text)).then(() =>
        dispatch(getComments())
      );
      setText("");
      setEdit(false);
    }
  };
  const handleDelete = () => {
    dispatch(deleteComment(postId, comment.id))
    .then(() =>
      dispatch(getComments()));
  };
  useEffect(() => {
    const checkAuthor = () => {
      if (uid == comment.userId) {
        setIsAuthor(true);
      }
    };

    checkAuthor();
  }, [uid, comment.userId]);
  return (
    <div >
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
            className='textcomment edit-comment'
            onChange={(e) => setText(e.target.value)}
            defaultValue={comment.content}
                    />
          <div className="edit-btn">
            <label htmlFor="text" onClick={() => setEdit(!edit)} className="label-edit"  >
              annuler
            </label>

            <input type="submit" value="Modifier" className="submit-edit" />
          </div>
        </form>
      )}
    </div>
  );
}
