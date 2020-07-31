import {profileAPI, usersAPI} from "../API/API";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USERP_ROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'

const initialState = {
    postData: [
        {id: 1, message: `Hi Victor`, likeCount: 20,},
        {id: 2, message: `Hy`, likeCount: 15,},
        {id: 3, message: `Hky`, likeCount: 1,},
        {id: 4, message: `Hghwjhg jkr`, likeCount: 0,},
        {id: 5, message: `Hwgfl wkj`, likeCount: 11,},
    ],
    profile: null,
    status: ''
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0
            };
            let stateCopy = {
                ...state,
            postData: [...state.postData, newPost],
            newPostText: ""
            };
            return stateCopy;
        }

        case DELETE_POST: {
            return {...state, postData: state.postData.filter(p => p.id != action.postId)}
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
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId})




export const getUserProfile = (userId) => async (dispatch) => {
    try {
        let response = await  usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }
    catch (e) {
        console.log(e)
    }
}


export const getStatus = (userId) => async (dispatch) => {
    try {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data))
    }
    catch (e) {
        console.log(e)
    }
}
export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await  profileAPI.updateStatus(status);
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
    catch (e) {
        console.log(e)
    }
}


export default profilePageReducer;

