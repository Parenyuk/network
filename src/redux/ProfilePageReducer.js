const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    postData: [
        {id: 1, message: `Hi Victor`, likeCount: 20,},
        {id: 2, message: `Hy`, likeCount: 15,},
        {id: 3, message: `Hky`, likeCount: 1,},
        {id: 4, message: `Hghwjhg jkr`, likeCount: 0,},
        {id: 5, message: `Hwgfl wkj`, likeCount: 11,},
    ],
    newPostText: ''
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {
                ...state,
            posts: [...state.postData, newPost],
            newPostText: ""
            };
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state,
                newPostText: action.newText}
       }
        default:
            return state;
      }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text})


export default profilePageReducer;

