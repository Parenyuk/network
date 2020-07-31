import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import AddPostFormRedux from "./Post/AddPostFormRedux/AddPostFormRedux";


const MyPosts = React.memo(props => {
    let deletePost = (postId) => {
        props.deletePost(postId)
    }
    let postDataElement =
        [...props.postData].reverse()
       .map(d => <Post id={d.id} message={d.message} likeCount={d.likeCount} deletePost={deletePost} />)
    let newPostElement = React.createRef();
    let onAddPost = (postData) => {
        props.addPost(postData.newPostText);
    }

    return (
        <div>
            <div>My posts</div>
            <div>New post</div>
            <div>
                <AddPostFormRedux onSubmit={onAddPost}/>
                {postDataElement}
            </div>
        </div>
    )
});



export default MyPosts;

