import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";
import "./App.css";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes/index";
import jwt_decode from 'jwt-decode'
import Profil from './pages/Profil/Profil'

function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('Token'); 
    if (token){ 
      const decodedToken= jwt_decode(token);
      const userId = decodedToken.userId;
      setUid(userId)
      
   if (uid) { dispatch(getUser(uid))}}
    
   
  }, [uid, dispatch]);
  
  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
