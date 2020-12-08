import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                store={props.store}
                // postsData={props.profilePage.postsData}
                // newPostText={props.profilePage.newPostText}
                // updateNewPostText={props.updateNewPostText}
                // addPost={props.addPost}
            />
        </div>
    )
}

export default Profile;