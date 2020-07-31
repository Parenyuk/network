import React from "react";
import {
    addPostActionCreator, deletePostActionCreator,
} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addPost:  (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },
        deletePost: (postId) => {
          dispatch(deletePostActionCreator(postId))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts);

export default MyPostsContainer;

