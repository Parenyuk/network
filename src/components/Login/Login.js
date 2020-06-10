import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const Login = (props) => {
    const submit = (formData) => {
        console.log(formData)
    }
        return (
            <div>
               <h1>Login</h1>
                <LoginReduxForm onSubmit={submit} />
            </div>
        )
}
const LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><Field placeholder={'Login'}
                            name={'login'} component={Input}
                            validate={[required]}

                /></div>
                <div><Field placeholder={'Password'}
                            name={'password'}
                            component={Input}
                            validate={[required]}
                /></div>
                <div><Field type={'checkbox'} name={'rememberMe'} component={Input}/>remember me</div>
                <div><button>Login</button></div>
            </form>
        </div>

    )
}

const LoginReduxForm = reduxForm({
        form: 'login'
    })(LoginForm)




export default Login;