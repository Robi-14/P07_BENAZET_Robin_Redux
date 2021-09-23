import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePost, getPosts } from "../../actions/post.actions";
import { dateParser } from "./../../Utils/Utils";

import "./Card.css";
import CardComment from "./CardComment";
import Deletecard from "./Deletecard";

export default function Card({ post }) {
  // useSelector connecte au store avec le usersReducer
  const usersData = useSelector((state) => state.usersReducer);
  // useSelector connecte au store avec le userReducer
  const userData = useSelector((state) => state.userReducer);
  // permet de récupérer la fonction dispatch au sein de notre composant afin de pouvoir dispatch des actions Redux.
  const dispatch = useDispatch();
  //mise en place des states
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [attachement, setAttachement] = useState();

  // quand l'input de type file change on recupere l'evenement e, afin de modifier le state attachement de e.target.file
  const handlePicture = (e) => {
    setAttachement(e.target.files[0]);
  };

  // au click sur le bouton modifier des la fonction asynchrone
  const updateItem = async (e) => {
    // si il y a un texte modifier ou une image modifié
    if (textUpdate || attachement) {
      // on retire l'evenement par default

      const data = new FormData();
      data.append("content", textUpdate);
      data.append("attachment", attachement);
      // on attend la mise à jour du post
      await dispatch(updatePost(post.id, data));

      dispatch(getPosts());
    }
  };
  const toto = () => {
    setIsUpdated(false);
    updateItem();
  };
 
  return (
    <div className="card-container" key={post.id}>
      <div className="user_date">
        <p>
          {!!usersData[0] &&
            usersData
              .map((user) => {
                if (user.id === post.UserId) return user.firstname;
                else return null;
              })
              .join("")}{" "}
          {!!usersData[0] &&
            usersData
              .map((user) => {
                if (user.id === post.UserId) return user.lastname;
                else return null;
              })
              .join("")}
        </p>
        <p>Posté le {dateParser(post.createdAt)}</p>
      </div>
      <div className="content_attachment">
        {isUpdated ? (
          <div className="updatde-post">
            <textarea
              defaultValue={post.content}
              onChange={(e) => setTextUpdate(e.target.value)}
            ></textarea>
            <div className="button-container">
              <button onClick={(e) => toto(e)} className="edit">
                Modifier
              </button>
              <input
                type="file"
                id="file-upload"
                name="attachment"
                onChange={(e) => handlePicture(e)}
              />
            </div>
          </div>
        ) : (
          <div>
            <p className="content">{post.content}</p>
          </div>
        )}
        {post.attachment && (
          <img
            src={post.attachment}
            alt="card-attachement"
            className="card-attachement"
          />
        )}
      </div>

      <div className="button">
        <img
          src="./img/comment.svg"
          alt="icon comment"
          className="btn-img"
          onClick={() => setShowComments(!showComments)}
        />
        {userData.isAdmin || userData.id === post.UserId ? (
          <div className="button-container">
            <div onClick={() => setIsUpdated(!isUpdated)}>
              <img src="/img/edit.svg" alt="edit" className="btn-img" />{" "}
            </div>
            <Deletecard id={post.id} />
          </div>
        ) : (
          ""
        )}
      </div>
      {showComments && <CardComment post={post} />}
    </div>
  );
}
