const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    // users: [
    //     { id: 1, followed: true, name: 'Owl', surname: 'Lee', avatar: 'https://bit.ly/3orDK1x', status: 'BLM!', location: {city: 'Los Angeles', country: 'USA'} },
    //     { id: 2, followed: false, name: 'Bark', surname: 'Woofson', avatar: 'https://bit.ly/36L1ibZ', status: 'On December 21st see you near monument', location: {city: 'Kyiv', country: 'Ukraine'} },
    //     { id: 3, followed: false, name: 'Woof', surname: 'Barkson', avatar: 'https://bit.ly/39Kx6iV', status: 'Come and visit me someday', location: {city: 'Ljubljana', country: 'Slovenia'} },
    //     { id: 4, followed: true, name: 'Lion', surname: 'Kingston', avatar: 'https://bit.ly/3lQ9hsd', status: 'One more time, bend your knees, bitch', location: {city: 'London', country: 'UK'} },
    // ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;