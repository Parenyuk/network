import React from "react";
import s from './Post.module.css'

const Post = () => {
    return (
        <div>
            <div className={s.post} >
                <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
                Post 1
            </div>
        </div>
    )
}
export default Post;