import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {Redirect} from "react-router";

const LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><Field placeholder={'Email'}
                            name={'email'} component={Input}
                            validate={[required]}

                /></div>
                <div><Field placeholder={'Password'}
                            name={'password'}
                            component={Input}
                            validate={[required]}
                            type={'password'}
                /></div>
                <div><Field type={'checkbox'} name={'rememberMe'} component={Input}/>remember me</div>
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