import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post.actions";
import Card from "../Post/Card";
import "./Thread.css";

export default function Thread() {
  //mise en place des states
  const [loadPost, setLoadPost] = useState(true);
  const [count, setCount] = useState(10);
  // permet de récupérer la fonction dispatch au sein de notre composant afin de pouvoir dispatch des actions Redux.
  const dispatch = useDispatch();
  // useSelector connecte au store avec le postReducer
  const posts = useSelector((state) => state.postReducer);
  //  fonction qui permet de faire l'infinite scroll
  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPost(true);
    }
  };

  //useEffect s'effectue chaque fois que loadPost , count, ou le dispatch change

  useEffect(() => {
    // si loadPost est true:
    if (loadPost) {
      // on recupere le nombre de post correspond au count
      dispatch(getPosts(count));
      // on passe loadPost sur false
      setLoadPost(false);
      // on modifie le count en lui ajoutant +5
      setCount(count + 5);
    }
    // à l'evenement du scroll on declenche la fonction loadMore
    window.addEventListener("scroll", loadMore);
    // une fois executé on l'enleve
    return () => window.removeEventListener("scroll", loadMore);
  }, [loadPost, count, dispatch]);

  // affichage du composant card avec en props post et postId
  return (
    <div className="thread-container">
      <div>
        {!!posts[0] &&
          posts.map((post) => {
            return <Card post={post} key={post.id} />;
          })}
      </div>
    </div>
  );
}
