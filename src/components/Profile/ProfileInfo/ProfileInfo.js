import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.scss';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://bit.ly/2VMf4ET" alt="" width="100%" height="350px" />
            </div>
            <div className={s.descriptionBlock}>
                {/* <img src={props.profile.photos.large} alt="" /> */}
                <img className={s.avatar} src="https://bit.ly/39IgisU" alt="" />
                {/* <h2>{props.profile.fullName}</h2> */}
                <h2>Adam Grambowski</h2>
                {/* <p>About self: {props.profile.aboutMe}</p> */}
                {/* <h3>A cool gorilla from each woman's dream</h3> */}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;