import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";





const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());

    }

    let onPostChange = (text) => {

        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)


    }

    return (
      <MyPosts updateNewPostText={onPostChange}
               addPost={addPost}
               postData={state.postData}
               newPostText={state.newPostText}
      />
    )
}
export default MyPostsContainer;

