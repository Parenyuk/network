import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    let onDeletePost = () => {
        debugger
        props.deletePost(props.id)
    }
    return (
        <div>
            <div className={s.post} >
                <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' alt='' />
                <div> {props.message} like: {props.likeCount} <span><button onClick={onDeletePost} >X</button></span></div>

            </div>
        </div>
    )
}
export default Post;