import React from 'react';
import { reduxForm } from 'redux-form';
import s from './ProfileInfo.module.scss';
import { createField, Input, Textarea } from '../../Common/FormsControl/FormsControl';

const ProfileDataForm = ({ login, handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>{login}</h2>
            </div>
            <button >save</button>
            { error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <b>Full name: </b> {createField('Full name:', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job: </b> {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
            </div>
            <div>
                <b>My professionan skills: </b> {createField('My skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me: </b> {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}:</b> {createField(key, 'contacts.' + key, [], Input)}
                    </div>
                })}
            </div>
        </form>
    );
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataFormReduxForm;