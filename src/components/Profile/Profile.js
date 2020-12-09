import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                state={props.state}
                postsData={props.state.profilePage.postsData}
                newPostText={props.state.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;