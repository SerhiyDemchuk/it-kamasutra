import { stopSubmit } from 'redux-form';
import { profileAPI, usersAPI } from '../../api/api';
import { postType, photosType, profileType } from '../../types/types';

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
    ] as Array<postType>,
    profile: null as profileType | null,
    status: '',
    newPostText: ''
}

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateType => {
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
                newPostText: ''
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
                profile: { ...state.profile, photos: action.photos } as profileType
            };
        default:
            return state;
    }
}

type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: profileType
}
const setUserProfile = (profile: profileType): setUserProfileType => ({ type: SET_USER_PROFILE, profile });

type addPostType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): addPostType => ({ type: ADD_POST, newPostText });

type updateNewPostTextACType = {
    type: typeof UPDATE_NEW_POST_TEXT
    text: string
}
export const updateNewPostTextAC = (text: string): updateNewPostTextACType => ({ type: UPDATE_NEW_POST_TEXT, text });

type setStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status });

type deletePostType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): deletePostType => ({ type: DELETE_POST, postId });

type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: photosType
}
const savePhotoSuccess = (photos: photosType): savePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    try {
        let response = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    } catch (error) {
        alert(error);
    }
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    try {

        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    } catch (error) {
        alert(error);
    }
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        alert(error);
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    try {
        let response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
        }
        dispatch(savePhotoSuccess(response.data.data.photos));
    } catch (error) {
        alert(error);
    }
}

export const saveProfile = (profile: profileType | null) => async (dispatch: any, getState: any) => {
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