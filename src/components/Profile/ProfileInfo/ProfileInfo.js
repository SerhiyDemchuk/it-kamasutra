import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.scss';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, login, status, updateStatus }) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://bit.ly/2VMf4ET" alt="" width="100%" height="350px" />
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src="https://bit.ly/39IgisU" alt="" />
                <h2>{login}</h2>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;