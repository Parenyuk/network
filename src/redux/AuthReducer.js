import {authAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH_REDUCER/SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    }

    const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,

            }
        default:
            return state;
    }

    }



export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}  })

//thunk

export const getAuthUserData = () => async (dispatch) => {
    try{
        let response = await authAPI.me()
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
    }
    catch (e) {
        console.log(e)
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    try {
        let response = await authAPI.login(email, password, rememberMe);
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
        else {
            let message =  response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
    catch (e) {
        console.log(e)
    }
}


export const logout = () => async (dispatch) => {
    try {
        let response = await  authAPI.logout();
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
    catch (e) {
        console.log(3)
    }
}


export default authReducer;