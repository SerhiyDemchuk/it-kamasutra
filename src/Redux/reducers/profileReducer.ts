import { FormAction, stopSubmit } from 'redux-form';
import { profileAPI } from '../../api/profile-api';
import { PostType, PhotosType, ProfileType } from '../../types/types';
import { BaseThunkType, InferActionsTypes } from '../reduxStore';

let initialState = {
    postsData: [
        { id: 1, avatar: 'https://bit.ly/39IgisU', post: 'O_o', likesCount: 23 },
        { id: 2, avatar: 'https://bit.ly/39IgisU', post: 'T_T', likesCount: 73 },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

const profileReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SN/profile/ADD_POST':
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
        case 'SN/profile/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile,
            };
        case 'SN/profile/SET_STATUS':
            return {
                ...state,
                status: action.status,
            };
        case 'SN/profile/DELETE_POST':
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId),
            };
        case 'SN/profile/SAVE_PHOTO_SUCCESS':
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType
            };
        default:
            return state;
    }
}

export const actions = {
    setStatus: (status: string) => ({ type: 'SN/profile/SET_STATUS', status } as const),
    deletePost: (postId: number) => ({ type: 'SN/profile/DELETE_POST', postId } as const),
    addPost: (newPostText: string) => ({ type: 'SN/profile/ADD_POST', newPostText } as const),
    updateNewPostTextAC: (text: string) => ({ type: 'SN/profile/UPDATE_NEW_POST_TEXT', text } as const),
    setUserProfile: (profile: ProfileType) => ({ type: 'SN/profile/SET_USER_PROFILE', profile } as const),
    savePhotoSuccess: (photos: PhotosType) => ({ type: 'SN/profile/SAVE_PHOTO_SUCCESS', photos } as const)
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    try {
        let response = await profileAPI.getProfile(userId);
        dispatch(actions.setUserProfile(response));
    } catch (error) {
        alert(error);
    }
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    try {

        let data = await profileAPI.getStatus(userId);
        dispatch(actions.setStatus(data));
    } catch (error) {
        alert(error);
    }
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status);

        if (data.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    } catch (error) {
        alert(error);
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.savePhoto(file);
        if (data.resultCode === 0) {
        }
        dispatch(actions.savePhotoSuccess(data.data.photos));
    } catch (error) {
        alert(error);
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    try {
        const userId = getState().auth.userId;
        const data = await profileAPI.saveProfile(profile);
        if (data.resultCode === 0) {
            if (userId !== null) {
                dispatch(getUserProfile(userId));
            } else {
                throw new Error("userId can't be null");
            }
        } else {
            dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }));
            return Promise.reject(data.messages[0]);
        }
    } catch (error) {
        alert(error);
    }
}

export default profileReducer;

export type initialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;