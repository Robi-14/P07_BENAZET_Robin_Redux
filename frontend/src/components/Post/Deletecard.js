import React from 'react'
import {useDispatch} from 'react-redux'
import { deletePost } from '../../actions/post.actions'

export default function Deletecard(props) {
    const dispatch = useDispatch()
    const deleteQuote = ()=>{
        dispatch(deletePost(props.id))
    }

    return (
        <div onClick={()=>{
            if (window.confirm(" Voulez-vous vraiment supprimer ce message ? "))
            deleteQuote()

        } }>
            <img src="./img/trash.svg" alt="delete" className='btn-img' />
        </div>
    )
}
