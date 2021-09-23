import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../../actions/post.actions";

export default function PostForm() {
  //mise en place des states
  const [message, setMessage] = useState("");
  const [attachement, setAttachement] = useState();
  // useSelector connecte au store avec le userReducer
  const userData = useSelector((state) => state.userReducer);
  // permet de récupérer la fonction dispatch au sein de notre composant afin de pouvoir dispatch des actions Redux.
  const dispatch = useDispatch();
  // fonction asynchrone qui se lance au submit du formulaire
  const handlePost = async (e) => {
    // enleve le rafraichissement par defaut
    e.preventDefault();
    // creation du formData avec en enfant le content et l'attachement
    if (message || attachement) {
      const data = new FormData();
      data.append("content", message);
      data.append("attachment", attachement);
      // on recupere la fonction dispatch de createPost(), on y ajoute en parametre data créé au dessus
      await dispatch(createPost(data));
      // on recupere la fct dispatch de getPost(), afin de rafficher les messages avec le nouveau post
      dispatch(getPosts());
      // on remet a l'initial le state message
      setMessage("");
      // on remet a l'initial le state attachement
      setAttachement();
      document.getElementById("file-upload").value = "";
    }
  };

  // quand l'input de type file change on recupere l'evenement e, afin de modifier le state attachement de e.target.file
  const handlePicture = (e) => {
    setAttachement(e.target.files[0]);
  };

  return (
    <div className="post-form-container">
      <form action="" onSubmit={handlePost}>
        <textarea
          name="textpost"
          className="text-post"
          placeholder={`Quoi de neuf, ${userData.firstname}`}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <div className="attchement-picture">
          <img src="./img/images.svg" alt="images" className="btn-img" />
          <input
            type="file"
            id="file-upload"
            name="attachment"
            onChange={(e) => handlePicture(e)}
          />
        </div>
        <input type="submit" value="Publier" />
      </form>
    </div>
  );
}
