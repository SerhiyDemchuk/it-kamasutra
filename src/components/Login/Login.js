import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div>
            <h1>Log in, bitch</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default Login;