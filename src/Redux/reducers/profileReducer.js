import { profileAPI, usersAPI } from '../../api/api';

const ADD_POST = 'profile/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

let initialState = {
    postsData: [
        { id: 1, avatar: 'https://bit.ly/39IgisU', post: 'O_o', likesCount: 23 },
        { id: 2, avatar: 'https://bit.ly/39IgisU', post: 'T_T', likesCount: 73 },
    ],
    profile: null,
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
            }
        default:
            return state;
    }
}

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));

    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export default profileReducer;