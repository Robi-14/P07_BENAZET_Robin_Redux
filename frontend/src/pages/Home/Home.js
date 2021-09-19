import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { UidContext } from '../../components/AppContext'
import LeftNav from '../../components/LeftNav/LeftNav'
import Log from '../../components/Log/Log'
import PostForm from '../../components/Post/PostForm'
import Thread from '../../components/Thread/Thread'
import Profil from '../Profil/Profil'
import"./Home.css"

export default function Home() {
    const uid =useContext(UidContext)
    return (
        <div>
        {uid ? (
        <div className='home'>
            <LeftNav/>
            <div className='main'>
                <PostForm/>
                <Thread/>


            </div>
        </div>) : <Profil/>}
        </div>)
        
}
