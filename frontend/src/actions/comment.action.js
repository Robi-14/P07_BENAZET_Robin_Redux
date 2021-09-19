import axios from "axios";


export const GET_COMMENTS='GET_COMMENTS'
export const ADD_COMMENT='ADD_COMMENT'
export const EDDIT_COMMENT='EDDIT_COMMENT'
export const DELETE_COMMENT='DELETE_COMMENT'
  
  
  
  
  export const getComments = (postId)=>{
    const userToken = localStorage.getItem("Token");
    const token = userToken;

    return (dispatch)=>{ 
        
        return axios.get(`http://localhost:5000/api/messages/${postId}}/commentaires`, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((res) => {
              
                dispatch({type: GET_COMMENTS, payload: res.data })})
            .catch((err)=> console.log(err))
      }
    
    
    }

    export const addComment= (postId, content) =>{
      const userToken = localStorage.getItem("Token");
      const token = userToken;
  
      return (dispatch)=>{
        return axios.post(`http://localhost:5000/api/messages/${postId}/commentaires`,{content}, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => { 
              
          dispatch({type: ADD_COMMENT, payload: { postId }})})
      .catch((err)=> console.log(err))
}


      }

    
      export const edditComment= (postId, commentId, content) =>{
        const userToken = localStorage.getItem("Token");
        const token = userToken;
    
        return (dispatch)=>{
          return axios.put(`http://localhost:5000/api/messages/${postId}/commentaires/${commentId}`,{content}, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => { 
                
            dispatch({type: EDDIT_COMMENT, payload: { content, commentId }})})
        .catch((err)=> console.log(err))
  }
  
  
        }
    
        export const deleteComment= (postId, commentId ) =>{
          const userToken = localStorage.getItem("Token");
          const token = userToken;
      
          return (dispatch)=>{
            return axios.delete(`http://localhost:5000/api/messages/${postId}/commentaires/${commentId}`, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => { 
                  
              dispatch({type: DELETE_COMMENT, payload: { postId, commentId }})})
          .catch((err)=> console.log(err))
    }
    
    
          }
      