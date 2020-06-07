import {profileAPI, usersAPI} from "../API/API";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USERP_ROFILE';
const SET_STATUS = 'SET_STATUS'

const initialState = {
    postData: [
        {id: 1, message: `Hi Victor`, likeCount: 20,},
        {id: 2, message: `Hy`, likeCount: 15,},
        {id: 3, message: `Hky`, likeCount: 1,},
        {id: 4, message: `Hghwjhg jkr`, likeCount: 0,},
        {id: 5, message: `Hwgfl wkj`, likeCount: 11,},
    ],
    newPostText: '',
    profile: null,
    status: ''
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
      }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}
export default profilePageReducer;

