import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}




const mapDispatchToProps = (dispatch) => {
    debugger
    return {


        addPost:  (newPostText) => {
            dispatch(addPostActionCreator(newPostText));

        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts);

export default MyPostsContainer;

