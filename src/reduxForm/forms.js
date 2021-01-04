import React from 'react';
import { Field, reduxForm } from 'redux-form';

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <Field placeholder='Login' name='login' component='input' />
            </div>
            <div>
                <Field placeholder='Password' name='password' component='input' />
            </div>
            <div>
                <Field type='checkbox' name='rememberMe' component='input' /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const addPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='it-kamasutra.com' name='myPostInput' component='input' />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm({ form: 'addPost' })(addPostForm);
export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);
export const AddMessageReduxForm = reduxForm({ form: 'dialgueAddMessageForm' })(addMessageForm);
