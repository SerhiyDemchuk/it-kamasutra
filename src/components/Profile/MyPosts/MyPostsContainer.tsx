
import React from 'react';
import {connect} from 'react-redux';

import MyPosts, { DispatchPropsType, MapPropsType } from './MyPosts';

import { AppStateType } from '../../../redux/reduxStore';
import { actions } from '../../../redux/reducers/profileReducer';

const mapStateToProps = (state: AppStateType) => {
    return {
        postsData: state.profilePage.postsData
    }
}


const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPost
})(MyPosts);

export default MyPostsContainer;
