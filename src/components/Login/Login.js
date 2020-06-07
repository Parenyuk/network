import React from "react";
import { Field, reduxForm } from 'redux-form'

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
                <div><Field placeholder={'Login'} name={'login'} component={'input'} /></div>
                <div><Field placeholder={'Password'} name={'password'} component={'input'}/></div>
                <div><Field type={'checkbox'} name={'rememberMe'} component={'input'}/>remember me</div>
                <div><button>Login</button></div>
            </form>
        </div>

    )
}

const LoginReduxForm = reduxForm({
        form: 'login'
    })(LoginForm)




export default Login;