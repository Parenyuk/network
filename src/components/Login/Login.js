import React from "react";
import { Field, reduxForm } from 'redux-form'
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {Redirect} from "react-router";
import s from './../Common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    const { handleSubmit, error } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    {createField('Email', 'email', Input, [required] )}
                     {createField('Password', 'password', Input, [required], {type: 'password' } )}
                {createField(null, 'rememberMe', Input, null, {type: 'checkbox'},  'remember me' )}
                {error &&  <div className={s.formSummaryError}>{error}</div>}

                <div><button>Login</button></div>
            </form>
        </div>

    )
}
const Login = (props) => {
    const submit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const LoginReduxForm = reduxForm({
        form: 'login'
    })(LoginForm)


export default connect(mapStateToProps, {login})(Login)