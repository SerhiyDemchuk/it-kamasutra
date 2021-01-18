import { stopSubmit } from 'redux-form';
import { profileAPI, usersAPI } from '../../api/api';

const ADD_POST = 'profile/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        { id: 1, avatar: 'https://bit.ly/39IgisU', post: 'O_o', likesCount: 23 },
        { id: 2, avatar: 'https://bit.ly/39IgisU', post: 'T_T', likesCount: 73 },
    ],
    profile: false,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                name: 'Adam',
                surname: 'Grambowski',
                avatar: 'https://bit.ly/39IgisU',
                post: action.newPostText,
                likesCount: Math.floor(Math.random() * (100 - 1)),
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId),
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            };
        default:
            return state;
    }
}

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId) => async (dispatch) => {
    try {
        let response = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    } catch (error) {
        alert(error);
    }
}

export const getStatus = (userId) => async (dispatch) => {
    try {

        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    } catch (error) {
        alert(error);
    }
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        alert(error);
    }
}

export const savePhoto = (file) => async (dispatch) => {
    try {
        let response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
        }
        dispatch(savePhotoSuccess(response.data.data.photos));
    } catch (error) {
        alert(error);
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    try {
        const userId = getState().auth.userId;
        const response = await profileAPI.saveProfile(profile);
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId));
        } else {
            dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
            return Promise.reject(response.data.messages[0]);
        }
    } catch (error) {
        alert(error);
    }
}

export default profileReducer;