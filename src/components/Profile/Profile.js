import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://i.ytimg.com/vi/RmNhHLsDXHw/maxresdefault.jpg" alt="" width="100%" height="350px" />
            </div>
            <div>
                <img className={s.avatar} src="https://i.pinimg.com/originals/6f/da/31/6fda3104b2681155fba7161ff6f590f3.jpg"/>
                <h2>Adam Grambowski</h2>
                <p>About self:</p>
                <h3>A cool gorilla from each woman's dream</h3>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;