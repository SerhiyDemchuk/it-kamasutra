import { usersAPI } from '../../api/api';
import { updateObjectInArray } from '../../utils/object-helper';
import { userType } from '../../types/types';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [] as Array<userType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

export type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true} ),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false} ),
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

type followUserActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followUser = (userId: number): followUserActionType => ({ type: FOLLOW, userId });

type unfollowUserActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowUser = (userId: number): unfollowUserActionType => ({ type: UNFOLLOW, userId });

type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<userType>
}
export const setUsers = (users: Array<userType>): setUsersActionType => ({ type: SET_USERS, users });

type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });

type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching });

type toggleIsFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): toggleIsFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (requestedPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(requestedPage));
        let data = await usersAPI.getUsers(requestedPage, pageSize);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        let apiFollow = usersAPI.follow.bind(usersAPI);

        followUnfollowFlow(dispatch, userId, apiFollow, followUser);
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: number) => {
        let apiUnfollow = usersAPI.unfollow.bind(usersAPI);

        followUnfollowFlow(dispatch, userId, apiUnfollow, unfollowUser);
    }
}

export default usersReducer;
