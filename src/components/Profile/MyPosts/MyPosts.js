import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";





const MyPosts = (props) => {
    let newPostElement = React.createRef();
    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text);
    // }
    let addPost = () => {
        let text = newPostElement.current.value;

        props.dispatch(addPostActionCreator());

    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
         let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
        newPostElement.current.value =''

    }

    let postDataElement = props.postData.map( d => <Post id={d.id} message={d.message} likeCount={d.likeCount} /> )
    return (
        <div>
            <div>My posts</div>
            <div>New post</div>
            <div>
                <div>
                    <input placeholder='Say what is on your mind...'
                           className={s.input} ref={newPostElement}
                           onChange={onPostChange}
                           value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}   className={s.button}>Add Post</button>
                </div>
                {postDataElement}
            </div>
        </div>
    )
}
export default MyPosts;

