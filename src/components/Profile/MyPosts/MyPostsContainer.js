
import React from 'react';
import { actions } from '../../../redux/reducers/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = actions.updateNewPostTextAC(text)
            dispatch(action);
        },
        addPost: (newPostText) => {
            dispatch(actions.addPost(newPostText));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;