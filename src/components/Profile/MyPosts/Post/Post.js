import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.post} >
                <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' alt='' />

                {props.message} like: {props.likeCount}
            </div>
        </div>
    )
}
export default Post;