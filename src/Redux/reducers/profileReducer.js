import { usersAPI } from '../../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        { id: 1, firstName: 'Owl', lastName: 'Lee', avatar: 'https://bit.ly/3orDK1x', post: 'O_o', likesCount: 23 },
        { id: 2, firstName: 'Bark', lastName: 'Woofson', avatar: 'https://bit.ly/36L1ibZ', post: 'Woof woof!', likesCount: 73 },
        { id: 3, firstName: 'Woof', lastName: 'Barkson', avatar: 'https://bit.ly/39Kx6iV', post: 'Woof!!!', likesCount: 64 },
        { id: 4, firstName: 'Lion', lastName: 'Kingston', avatar: 'https://bit.ly/3lQ9hsd', post: 'Bend your knees, bitch', likesCount: 216 },
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                name: 'Adam',
                surname: 'Grambowski',
                avatar: 'https://bit.ly/39IgisU',
                post: state.newPostText,
                likesCount: 33,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
}

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}

export default profileReducer;