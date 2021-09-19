import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment, getComments } from "../../actions/comment.action";
import { getPosts } from "../../actions/post.actions";
import { dateParser } from "./../../Utils/Utils";
import'./Card.css'
import EditDeleteComment from "./EditDeleteComment";

export default function CardComment({ post }) {
  const [loadComment, setLoadComment] = useState(true);
  const[textComment, setTextComment]=useState("")
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.commentReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
console.log(post.id);
  useEffect(() => {
    if (loadComment) {
      dispatch(getComments(post.id));
      setLoadComment(false);
    }
  }, [loadComment, dispatch]);

 const handleComment=(e)=>{
     e.preventDefault()

     if(textComment){
         dispatch(addComment(post.id , textComment))
           .then(()=>dispatch(getComments()))
            .then(()=>setTextComment(''))
     }

 }
  return (
    <div  key={comment.id}>
      <div>
        {!!comment[0] &&
          comment.map((comment) => {
            if (post.id === comment.messageId)
              return (
                <div key={comment.id}className="comments-container">
                  <div className="user_date">
                    <p>
                    {usersData.map((user) => {
                            if (user.id === comment.userId) return user.firstname;
                            else return null;
                          })
                          .join("")} {usersData.map((user) => {
                            if (user.id === comment.userId) return user.lastname;
                            else return null;
                          })
                          .join("")}
                    </p>
                    <p>Posté le {dateParser(comment.createdAt)}</p>
                  </div>
                  <div className="content_attachment">
                  <p className="content">{comment.content}</p>
                  {post.attachement && (<img src={post.attachement} alt="card-attachement" className="card-attachement"/>)}
                  </div>
                  <EditDeleteComment comment={comment} postId={post.id}/>
                </div>
              );
            else return null;
          })}
      </div>
      <form action="" onSubmit={handleComment} className="comment-form">
          <input type="text" name='text' onChange={(e)=>setTextComment(e.target.value)} value={textComment} placeholder='Ecrire un commentaire' className="textcomment"/>
          <br />
          <input type="submit" value='Envoyer'/>
      </form>
    </div>
  );
}
