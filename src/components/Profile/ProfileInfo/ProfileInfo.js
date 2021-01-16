import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.scss';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({savePhoto, profile, login, status, updateStatus, isOwner }) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                <img src="https://bit.ly/2VMf4ET" alt="" width="100%" height="350px" />
            </div>
            <div className={s.descriptionBlock}>
                {/* <img className={s.avatar} src="https://bit.ly/39IgisU" alt="" /> */}
                <img className={s.avatar} src={profile.photos.large || "https://bit.ly/39IgisU" } alt="" />
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <h2>{login}</h2>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;