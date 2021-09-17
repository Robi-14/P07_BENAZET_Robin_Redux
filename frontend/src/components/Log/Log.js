import React ,{useState}from "react";
import FormLogin from "./FormLogin/FormLogin";
import FormRegister from "./FormRegister/FormRegister";
import "./Log.css";

export default function Log() {
    const[registerModal, setRegisterModal]=useState(false)
    const[loginModal, setLoginModal]=useState(true)

    const handleModal = (e)=>{
      if(e.target.id === "register"){
        setLoginModal(false);
        setRegisterModal(true)
      }else if (e.target.id === "login"){
        setRegisterModal(false)
        setLoginModal(true)
    }}



  return (
    <div>
      <div className="log-form">
        <div className="form-container">
          <ul>
            <li onClick={handleModal} id='register' className={registerModal ? "active-btn" : null}>S'inscrire</li>
            <li onClick={handleModal} id='login'className={loginModal ? "active-btn" : null}>Se connecter</li>
          </ul>
          {registerModal &&  <FormRegister/>}
          {loginModal && <FormLogin/>}
        </div>
      </div>
    </div>
  );
}
