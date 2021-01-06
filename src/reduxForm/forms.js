import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../components/Common/FormsControl/FormsControl';
import { maxLengthCreator, minLengthCreator, required } from '../utils/validators/validators';
import style from '../components/Common/FormsControl/FormsControl.module.scss';

const maxLength50 = maxLengthCreator(50);

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name='newMessageBody' placeholder='Enter your message' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const passwordMinLength = minLengthCreator(6);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Email' name='email' component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder='Password' name='password' component={Input} type='password' validate={[required, passwordMinLength]} />
            </div>
            <div>
                <Field type='checkbox' name='rememberMe' component='input' /> remember me
            </div>
            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const maxLength10 = maxLengthCreator(10)

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='it-kamasutra.com' name='myPostInput' component={Textarea} validate={[required, maxLength10]} />
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
