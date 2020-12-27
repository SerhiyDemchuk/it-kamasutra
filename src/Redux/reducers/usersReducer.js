const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [
        // { id: 1, followed: true, name: 'Owl', surname: 'Lee', avatar: 'https://bit.ly/3orDK1x', status: 'BLM!', location: {city: 'Los Angeles', country: 'USA'} },
        // { id: 2, followed: false, name: 'Bark', surname: 'Woofson', avatar: 'https://bit.ly/36L1ibZ', status: 'On December 21st see you near monument', location: {city: 'Kyiv', country: 'Ukraine'} },
        // { id: 3, followed: false, name: 'Woof', surname: 'Barkson', avatar: 'https://bit.ly/39Kx6iV', status: 'Come and visit me someday', location: {city: 'Ljubljana', country: 'Slovenia'} },
        // { id: 4, followed: true, name: 'Lion', surname: 'Kingston', avatar: 'https://bit.ly/3lQ9hsd', status: 'One more time, bend your knees, bitch', location: {city: 'London', country: 'UK'} },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }
            case TOGGLE_IS_FETCHING:
                return { ...state, isFetching: action.isLoading}
            case TOGGLE_IS_FOLLOWING_PROGRESS:
                return { ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(ud => ud !== action.userId)
                }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export default usersReducer;