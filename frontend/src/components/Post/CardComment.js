import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment, getComments } from "../../actions/comment.action";
import { dateParser } from "./../../Utils/Utils";
import "./Card.css";
import EditDeleteComment from "./EditDeleteComment";

export default function CardComment({ post }) {
  const [textComment, setTextComment] = useState("");
  // permet de récupérer la fonction dispatch au sein de notre composant afin de pouvoir dispatch des actions Redux.
  const dispatch = useDispatch();
  // useSelector connecte au store avec le commentReducer
  const comment = useSelector((state) => state.commentReducer);
  // useSelector connecte au store avec le usersReducer
  const usersData = useSelector((state) => state.usersReducer);

  console.log(post.id);
  //useEffect s'effectue chaque fois que le dispatch change
  useEffect(() => {
    dispatch(getComments(post.id));
  }, [dispatch, post.id]);

  // declanche la fonction quand le quand le formulaire est soumis
  const handleComment = (e) => {
    // enleve evenement par default au clic sur l'input
    e.preventDefault();
    // si textComment est pas null
    if (textComment) {
      //  on ajoute un commentaire avec addComment, avec en parametre post.id et textComment
      dispatch(addComment(post.id, textComment))
        // on affiche les commentaires
        .then(() => dispatch(getComments()))
        // on rinitialise textComment
        .then(() => setTextComment(""));
    }
  };
  return (
    <div key={comment.id}>
      <div>
        {!!comment[0] &&
          comment.map((comment) => {
            if (post.id === comment.messageId)
              return (
                <div key={comment.id} className="comments-container">
                  <div className="user_date">
                    <p>
                      {usersData
                        .map((user) => {
                          if (user.id === comment.userId) return user.firstname;
                          else return null;
                        })
                        .join("")}{" "}
                      {usersData
                        .map((user) => {
                          if (user.id === comment.userId) return user.lastname;
                          else return null;
                        })
                        .join("")}
                    </p>
                    <p>Posté le {dateParser(comment.createdAt)}</p>
                  </div>
                  <div className="content_attachment">
                    <p className="content">{comment.content}</p>
                    {post.attachement && (
                      <img
                        src={post.attachement}
                        alt="card-attachement"
                        className="card-attachement"
                      />
                    )}
                  </div>
                  <EditDeleteComment comment={comment} postId={post.id} />
                </div>
              );
            else return null;
          })}
      </div>
      <form action="" onSubmit={handleComment} className="comment-form">
        <input
          type="text"
          name="text"
          onChange={(e) => setTextComment(e.target.value)}
          value={textComment}
          placeholder="Ecrire un commentaire"
          className="textcomment"
        />
        <br />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
