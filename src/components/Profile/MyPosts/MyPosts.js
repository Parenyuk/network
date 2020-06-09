import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

let AddPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your post'}/>
                <div>
                    <button>Add Post</button>
                </div>
            </form>
        </div>
    )
}
const AddPostFormRedux = reduxForm({
    form: 'ProfileAddPostForm'
})(AddPostForm)

const MyPosts = (props) => {
    let postDataElement = props.postData.map(d => <Post id={d.id} message={d.message} likeCount={d.likeCount}/>)
    let newPostElement = React.createRef();
    let onAddPost = (postData) => {
        debugger
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
}


export default MyPosts;

