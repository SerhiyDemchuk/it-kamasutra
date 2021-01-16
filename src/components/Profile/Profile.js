import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({profile, status, updateStatus, login, store, isOwner, savePhoto}) => {
    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                login={login}
                isOwner={isOwner}
                savePhoto={savePhoto}
            />
            <MyPostsContainer
                store={store}
            />
        </div>
    )
}

export default Profile;