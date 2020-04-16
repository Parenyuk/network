import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";





const MyPostsContainer = (props) => {

    // let state = props.store.getState().profilePage;


    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    //
    // }
    //
    // let onPostChange = (text) => {
    //
    //     let action = updateNewPostTextActionCreator(text);
    //     props.store.dispatch(action)
    //
    //
    // }

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().profilePage;
                let addPost = () => {
                   store.dispatch(addPostActionCreator());

                }

                let onPostChange = (text) => {

                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action)


                }
                return <MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     postData={store.getState().profilePage.postData}
                     newPostText={store.getState().profilePage.newPostText}
            />
            }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;

// return (
//     <MyPosts updateNewPostText={onPostChange}
//              addPost={addPost}
//              postData={state.postData}
//              newPostText={state.newPostText}
//     />
// )