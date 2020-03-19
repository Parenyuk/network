import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postDataElement = props.postData.map( d => <Post id={d.id} message={d.message} likeCount={d.likeCount} /> )
    return (
        <div>
            <div>My posts</div>
            <div>New post</div>
            <div>
                <div>
                    <input placeholder='Say what is on your mind...' className={s.input}/>
                </div>
                <div>
                    <button className={s.button}>Add Post</button>
                </div>
                {postDataElement}
            </div>
        </div>
    )
}
export default MyPosts;

