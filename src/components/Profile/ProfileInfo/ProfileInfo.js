import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://bit.ly/2VMf4ET" alt="" width="100%" height="350px" />
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src="https://bit.ly/39IgisU" alt="" />
                <h2>Adam Grambowski</h2>
                <p>About self:</p>
                <h3>A cool gorilla from each woman's dream</h3>
            </div>
        </div>
    )
}

export default ProfileInfo;