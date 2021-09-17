import React, { useState } from 'react'
import"./FormLogin.css"
import axios from 'axios';


export default function FormLogin() {
    const[email, setEmail]= useState('')
    const[password,setPassword]=useState('')

   
    const Error = document.querySelector('.message.error')

    const login = () => {
        axios
          .post("http://localhost:5000/api/user/login", {
            email,
            password,
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
              
             
              localStorage.setItem("Token",response.data.token)
              localStorage.setItem('userId',response.data.userId)
              window.location ='/'  
            }
          )
          .catch((err) => Error.innerHTML= err.data)
          
          }

    const handlelogin = (e)=>{

        e.preventDefault()
        login()


    }

    return (
        <div>
           <form action="" onSubmit={handlelogin} id="login-form">
               <label htmlFor="email">Email</label>
               <br/>
               <input type="text" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
               <div className="email error"></div>
                <br />
                <label htmlFor="password">Mot de passe</label>
                <br />
                <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <div className="message error"></div>
               <input type="submit" value="Se connecter" />
           </form>
        </div>
    )
}
