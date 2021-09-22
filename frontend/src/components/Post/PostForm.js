import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, getPosts } from '../../actions/post.actions'


export default function PostForm() {
    
    const[message, setMessage]= useState("")
    const[attachement, setAttachement]=useState()
    const userData = useSelector((state)=>state.userReducer)
    const dispatch = useDispatch()

    const handlePost=(async(e)=>{
        e.preventDefault()
        const data =new FormData()
        data.append('content', message)
        data.append('image', attachement)

        await dispatch(createPost(data))
        dispatch(getPosts())
        setMessage('')
        setAttachement()
    })


    const handlePicture =(e)=>{
        setAttachement(e.target.files[0])
        
        

    }
    
    

    return (
        <div className='post-form-container'>
            <form action="" onSubmit={handlePost} >
                <textarea name="textpost" className="text-post" placeholder={`Quoi de neuf, ${userData.firstname}`} className='textpost' onChange={(e) => setMessage(e.target.value)} value={message} />
                <div className="attchement-picture">
                <img src="./img/images.svg" alt="images" className="btn-img" />
                <input type='file'  id='file-upload' name='image' accept=".jpeg, .jpg, .png" onChange={(e)=>handlePicture(e)}/>
                </div>
                <input type="submit" value="Publier" />
            </form>
            
        </div>
    )
}
