import axios from "axios";

export const GET_USER = "GET_USER";
export const DELETE_USER = "DELETE_USER";

const userToken = localStorage.getItem("Token");
const token = userToken;

// recuperation de l'user
export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:5000/api/user/${uid}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// suppression de l'user
export const deleteUser = (uid) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:5000/api/user/${uid}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .catch((err) => console.log(err));
  };
};
