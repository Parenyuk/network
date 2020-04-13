const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            state.profilePage.postData.push(newPost);
           state.profilePage.newPostText = ""
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.profilePage.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;

