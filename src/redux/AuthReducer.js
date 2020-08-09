import {authAPI, securityAPI} from '../API/API';
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH_REDUCER/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'AUTH_REDUCER/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
    }

    const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,  ...action.payload
            }
        default:
            return state;
    }

    }



export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}  })
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}  })
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

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    try {
        let response = await authAPI.login(email, password, rememberMe, captcha);
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
        else {
            if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
            }
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
        console.log(e)
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    try {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }
    catch (e) {

    }
}

export default authReducer;
