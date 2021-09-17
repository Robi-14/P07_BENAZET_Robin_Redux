import React from 'react'
import LeftNav from '../LeftNav/LeftNav'
import {useSelector} from 'react-redux';
import './ProfilLogged.css';

export default function ProfilLogged() {
   const userData = useSelector((state) => state.userReducer)
    return (
        <div className="profilLogged-container">
            <LeftNav/>
            <div className="profilForm-container">
               
                <div className="profilForm"> 
                <h3 className='titreprofil'>Votre Profil</h3>
                    <h4 className='label'>Votre nom</h4>
                    <p className="infoprofil">{userData.lastname}</p>
                    <h4 className='label'>Votre prénom</h4>
                    <p className="infoprofil">{userData.firstname}</p>
                    <h4 className='label'>Votre email</h4>
                    <p className="infoprofil">{userData.email}</p>
                </div>
            </div>
        </div>
    )
}
