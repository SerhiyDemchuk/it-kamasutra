import React, { ChangeEvent, useState } from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import style from './ProfileInfo.module.scss';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
import { ContactsType, ProfileType } from '../../../types/types';

type PropsType = {
    login: string
    isOwner: boolean
    profile: ProfileType
    updateStatus: () => void
    status: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({ savePhoto, profile, login, status, updateStatus, isOwner, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData: ProfileType) => {
        // todo: change below .then
        saveProfile(formData)
            .then(() => {
                setEditMode(false);
            })
    }

    return (
        <div>
            <div>
                <img src="https://bit.ly/2VMf4ET" alt="" width="100%" height="350px" />
            </div>
            <div className={style.descriptionBlock}>
                <img className={style.avatar} src={profile.photos.large || "https://bit.ly/39IgisU"} alt="" />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                {editMode
                    ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} login={login} profile={profile} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} login={login} profile={profile} isOwner={isOwner} />
                }
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

type ProfileDataPropsType = {
    login: string
    isOwner: boolean
    profile: ProfileType
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, login, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>
                <h2>{login}</h2>
            </div>
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            { profile.lookingForAJob &&
                <div>
                    <b>My professionan skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
                })}
            </div>
        </div>
    )
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactsPropsType> = ({ contactTitle, contactValue }) => {
    return (
        <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
    );
}

export default ProfileInfo;