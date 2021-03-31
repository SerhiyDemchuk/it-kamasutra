import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../components/Common/FormsControl/FormsControl';
import { maxLengthCreator, minLengthCreator, required } from '../utils/validators/validators';
import style from '../components/Common/FormsControl/FormsControl.module.scss';

const maxLength50 = maxLengthCreator(50);

const addMessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Enter your message', 'newMessageBody', [required, maxLength50], Textarea)}
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const passwordMinLength = minLengthCreator(6);

type LoginFormValuesType = {
    captchaUrl: string,
    rememberMe: boolean,
    email: string,
    password: string,
}

type LoginFormOwnProps = {
    captchaUrl: string | null
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>;


const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input)}
            {createField<LoginFormValuesTypeKeys>('Password', 'password', [required, passwordMinLength], Input, {type: 'password'})}
            {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl} alt=''/> }
            {captchaUrl && createField('Type captcha here', 'captcha', [required], Input) }

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
                {createField('it-kamasutra.com', 'myPostInput', [required, maxLength10], Input)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm({ form: 'addPost' })(addPostForm);
export const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm);
export const AddMessageReduxForm = reduxForm({ form: 'dialgueAddMessageForm' })(addMessageForm);
