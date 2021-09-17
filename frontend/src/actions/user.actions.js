import axios from "axios";

export const GET_USER = "GET_USER";
const userToken = localStorage.getItem("Token");
const token = userToken;
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
