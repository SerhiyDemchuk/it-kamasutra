import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../components/Common/FormsControl/FormsControl';
import { maxLengthCreator, minLengthCreator, required } from '../utils/validators/validators';
import style from '../components/Common/FormsControl/FormsControl.module.scss';

const maxLength50 = maxLengthCreator(50);

const addMessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            {/* {createField('Enter your message', 'newMessageBody', [required, maxLength50], Textarea)} */}
            <Field component={Textarea} validate={[required, maxLength50]} name='newMessageBody' placeholder='Enter your message' />
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const passwordMinLength = minLengthCreator(6);

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required, passwordMinLength], Input, {type: 'password'})}
            {createField(null, 'rememberMe', null, Input, {type: 'checkbox'}, 'remember me')}
            { error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const maxLength10 = maxLengthCreator(10)

const addPostForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {/* {createField('it-kamasutra.com', 'myPostInput', { required, maxLength10 }, {Input})} */}
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
