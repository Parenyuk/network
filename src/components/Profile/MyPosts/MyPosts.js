import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: `Hi Victor`, likeCount: 20, },
        {id: 2, message: `Hy`, likeCount: 15, },
        {id: 3, message: `Hky`, likeCount: 1, },
        {id: 4, message: `Hghwjhg jkr`, likeCount: 0, }
    ]

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
                <Post   id={postData[0].id}  message={postData[0].message} likeCount={postData[0].likeCount}/>
                <Post   id={postData[1].id}  message={postData[1].message} likeCount={postData[1].likeCount}/>
                <Post   id={postData[2].id}  message={postData[2].message} likeCount={postData[2].likeCount}/>
                <Post   id={postData[3].id}  message={postData[3].message} likeCount={postData[3].likeCount}/>
            </div>
        </div>
    )
}
export default MyPosts;

