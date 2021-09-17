import axios from "axios";

//posts
export const GET_POSTS ='GET_POSTS';
const userToken = localStorage.getItem("Token");
const token = userToken
export const getPosts = (num)=>{
return (dispatch)=>{
    return axios.get("http://localhost:5000/api/messages/", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          const array = res.data.slice(0,num)
            dispatch({type: GET_POSTS, payload: array})})
        .catch((err)=> console.log(err))
  }


}



