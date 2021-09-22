import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../../actions/post.actions";
import { dateParser } from "./../../Utils/Utils";

import "./Card.css";
import CardComment from "./CardComment";
import Deletecard from "./Deletecard";

export default function Card({ post }) {
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const[attachement, setAttachement]=useState()

  const handlePicture =(e)=>{
    setAttachement(e.target.files[0])
}

  
  const updateItem = async(e) => {
    if (textUpdate || attachement) {
      e.preventDefault()
        
      await dispatch(updatePost(post.id, textUpdate));

    }
    setIsUpdated(false);
  };
console.log(userData.isAdmin);
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
              <button onClick={updateItem} className="edit">
                Modifier
              </button>{" "}
              <input type='file'  id='file-upload' name='image' accept=".jpeg, .jpg, .png" onChange={(e)=>handlePicture(e)}/>
            </div>
          </div>
        ) : (
          <p className="content">{post.content}</p>
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
        { userData.isAdmin|| userData.id === post.UserId ? (
          <div className="button-container">
            <div onClick={() => setIsUpdated(!isUpdated)}>
              <img src="/img/edit.svg" alt="edit" className="btn-img" />{" "}
            </div>
            <Deletecard id={post.id} />
          </div>
        ):('')}
      </div>
      {showComments && <CardComment post={post} />}
    </div>
  );
}
