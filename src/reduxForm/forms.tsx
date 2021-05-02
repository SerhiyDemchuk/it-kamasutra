import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, GetStringKeys, Input, Textarea } from '../components/Common/FormsControl/FormsControl';
import { maxLengthCreator, minLengthCreator, required } from '../utils/validators/validators';
import style from '../components/Common/FormsControl/FormsControl.module.scss';
import { NewMessageFormValuesType } from '../components/Dialogues/Dialogues';

const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>;
type AddMessagePropsType = {};

const addMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, AddMessagePropsType> & AddMessagePropsType> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<NewMessageFormValuesKeysType>('Enter your message', 'newMessageBody', [required, maxLength50], Textarea)}
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

type AddPostPropsType = {};

export type AddPostFormValuesType = {
    newPostText: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>;

const addPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, AddPostPropsType> & AddPostPropsType> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField<AddPostFormValuesTypeKeys>('it-kamasutra.com', 'newPostText', [required], Input)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm<AddPostPropsType, AddPostPropsType>({ form: 'addPost' })(addPostForm);
export const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm);
export const AddMessageReduxForm = reduxForm<NewMessageFormValuesType>({ form: 'dialgueAddMessageForm' })(addMessageForm);
