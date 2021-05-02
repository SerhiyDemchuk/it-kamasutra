import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types/types';

type PropsType = {
    login: string
    status: string
    isOwner: boolean
    profile: ProfileType
    savePhoto: () => Promise<any>
    updateStatus: () => void
    saveProfile: () => Promise<any>
    
}

const Profile: React.FC<PropsType> = ({ profile, status, updateStatus, login, store, isOwner, savePhoto, saveProfile }) => {
    return (
        <div>
            <ProfileInfo
                login={login}
                status={status}
                isOwner={isOwner}
                profile={profile}
                savePhoto={savePhoto}
                saveProfile={saveProfile}
                updateStatus={updateStatus}
            />
            <MyPostsContainer
                store={store}
            />
        </div>
    );
}

export default Profile;
