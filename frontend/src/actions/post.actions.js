import axios from "axios";

//posts
export const GET_POSTS ='GET_POSTS';
export const UPDATE_POST ='UPDATE_POST'
export const DELETE_POST ='DELETE_POST'
export const CREATE_POST ='CREATE_POST'



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


export const updatePost = (postId, content)=>{
return(dispatch)=> {
  return axios.put(`http://localhost:5000/api/messages/${postId}`,{ content} ,{
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        
          dispatch({type: UPDATE_POST, payload: {content, postId}})
        })
        .catch((err)=> console.log(err))
}

}

export const deletePost= (postId)=>{

  return(dispatch)=> {
    return axios.delete(`http://localhost:5000/api/messages/${postId}`,{
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          
            dispatch({type: DELETE_POST, payload: {postId}})
          })
          .catch((err)=> console.log(err))
  }
  
  }

  export const createPost= (data)=>{
    return(dispatch)=> {
      return axios.post('http://localhost:5000/api/messages/new', data,{
        headers: { Authorization: `Bearer ${token}` }
   


    })}}
