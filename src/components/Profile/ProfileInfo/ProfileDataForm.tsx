import React from 'react';
import style from './ProfileInfo.module.scss';
import { ProfileType } from '../../../types/types';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, GetStringKeys, Input, Textarea } from '../../Common/FormsControl/FormsControl';

type PropsType = {
    login: string
    profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>;

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({ login, handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>{login}</h2>
            </div>
            <button >save</button>
            { error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <b>Full name: </b> {createField<ProfileTypeKeys>('Full name:', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job: </b> {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
            </div>
            <div>
                <b>My professionan skills: </b> {createField<ProfileTypeKeys>('My skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me: </b> {createField<ProfileTypeKeys>('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={style.contact}>
                        {/* todo: create some solution for embedded objects */}
                        <b>{key}:</b> {createField(key, 'contacts.' + key, [], Input)}
                    </div>
                })}
            </div>
        </form>
    );
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataFormReduxForm;