import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
                <div>New post</div>
            <div>
                <div>
                    <input placeholder='Say what is on your mind...' className={s.input} />
                </div>
                <div>
                    <button>Add Post</button>
                </div>
                <Post/>
            </div>
</div>
    )
    }
    export default MyPosts;

