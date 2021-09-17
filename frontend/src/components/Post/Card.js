import React from "react";
import { useSelector } from "react-redux";
import {dateParser} from'./../../Utils/Utils'
import './Card.css'

export default function Card({ post }) {
  console.log(post.UserId);
  const usersData = useSelector((state) => state.usersReducer);
  
  return (
    <div className="card-container" key={post.id}>
      <div className="user_date">
        <p>
          {!!usersData[0] &&
            usersData
              .map((user) => {
                if (user.id === post.UserId) return user.firstname
                else return null
              })
              .join("")}{" "}
          {!!usersData[0] &&
            usersData
              .map((user) => {
                if (user.id === post.UserId) return user.lastname
                else return null
              })
              .join("")}
        </p>
        <p>Posté le {dateParser(post.createdAt)}</p>
      </div>
      <div className="content_attachment">
          <p className='content'>{post.content}</p>
          {post.attachement && <img src={post.attachement} alt="card-attachement" className="card-attachement"/>}
      </div>
      <div className="comments-button">
      <img src="./img/comment.svg" alt="icon comment" className='comments-img' />
      </div>
    </div>
  );
}
