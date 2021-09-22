import React , {useContext}from 'react'
import Log from '../../components/Log/Log'
import "./Profil.css";
import { UidContext } from '../../components/AppContext';
import ProfilLogged from '../../components/profillogged/ProfilLogged';

export default function Profil() {
    const uid = useContext(UidContext)
    return (
       <div className="profil-page">
           {uid ? (
               <ProfilLogged/>
           ): (
            <div className="log-container">
                <div className='log'>
                    <Log/>
                </div>
                <div className="img-container">
                    <img src="./img/icon-left-font.svg" alt="Logo_groupomania" className='logo-groupo' />
                </div>
            </div>
            )}
        </div>
    )
}
