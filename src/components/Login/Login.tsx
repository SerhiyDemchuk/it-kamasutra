import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import { AppStateType } from '../../redux/reduxStore';
import { LoginReduxForm } from '../../reduxForm/forms';
import { login } from '../../redux/reducers/authReducer';

type MapStatePropsType = {
    captchaUrl: string | null,
    isAuth: boolean
}

export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}

// type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({login, isAuth, captchaUrl}) => {
    
    const onSubmit = (formData: LoginFormValuesType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (isAuth) return <Redirect to='/profile' />

    return (
        <div>
            <h1>Log in</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, { login })(Login);