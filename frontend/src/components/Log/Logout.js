
import React from 'react'
import "./Logout.css";


export default function Logout() {

    const logout = ()=> {
        localStorage.removeItem("Token")
        localStorage.removeItem('userId')
        window.location='/profil'
    }

    return (
        <>
            <img src="./img/log-out.svg" alt="log-out" className='logo-log' onClick={logout} />
        </>
    )
}
