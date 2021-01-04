import { profileAPI, usersAPI } from '../../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        { id: 1, firstName: 'Owl', lastName: 'Lee', avatar: 'https://bit.ly/3orDK1x', post: 'O_o', likesCount: 23 },
        { id: 2, firstName: 'Bark', lastName: 'Woofson', avatar: 'https://bit.ly/36L1ibZ', post: 'Woof woof!', likesCount: 73 },
        { id: 3, firstName: 'Woof', lastName: 'Barkson', avatar: 'https://bit.ly/39Kx6iV', post: 'Woof!!!', likesCount: 64 },
        { id: 4, firstName: 'Lion', lastName: 'Kingston', avatar: 'https://bit.ly/3lQ9hsd', post: 'Bend your knees, bitch', likesCount: 216 },
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
                likesCount: 33,
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
                status: action.status
            }
        default:
            return state;
    }
}

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}

export default profileReducer;