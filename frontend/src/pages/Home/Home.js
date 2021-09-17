import React from 'react'
import LeftNav from '../../components/LeftNav/LeftNav'
import Thread from '../../components/Thread/Thread'
import"./Home.css"

export default function Home() {
    return (
        <div className='home'>
            <LeftNav/>
            <div className='main'>
                <Thread/>


            </div>
        </div>
    )
}
