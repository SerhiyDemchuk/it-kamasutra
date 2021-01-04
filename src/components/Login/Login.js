import React from 'react';
import { LoginReduxForm } from '../../reduxForm/forms';

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


export default Login;