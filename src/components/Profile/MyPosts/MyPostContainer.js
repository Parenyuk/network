import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {connect, mapStateToProps, mapStateToProps} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = () => {
    return {
        updateNewPostText:  (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost:  () => {
            dispatch(addPostActionCreator());

        }
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps )(MyPost);

export default MyPostsContainer;
