import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, getPosts } from '../../actions/post.actions'


export default function PostForm() {
    
    const[message, setMessage]= useState("")
    const[attachement, setAttachement]=useState("")
    const[file, setFile]=useState()
    const userData = useSelector((state)=>state.userReducer)
    const dispatch = useDispatch()

    const handlePost=(async(e)=>{
        e.preventDefault()
        await dispatch(createPost(message,attachement))
        dispatch(getPosts())
        setMessage('')


    



    })

    return (
        <div className='post-form-container'>
            <form action="" onSubmit={handlePost} >
                <textarea name="textpost" className="text-post" placeholder={`Quoi de neuf, ${userData.firstname}`} className='textpost' onChange={(e) => setMessage(e.target.value)} value={message} />
                <img src="./img/images.svg" alt="images" className="btn-img" />
                <input type="submit" value="Publier" />
            </form>
            
        </div>
    )
}
