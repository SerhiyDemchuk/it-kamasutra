import { usersAPI } from '../../api/users-api';
import { updateObjectInArray } from '../../utils/object-helper';
import { UserType } from '../../types/types';
import { BaseThunkType, InferActionsTypes } from '../reduxStore';
import { Dispatch } from 'redux';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

export type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
            }
        case 'SET_USERS':
            return { ...state, users: action.users }
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.currentPage }
        case 'SET_TOTAL_USERS_COUNT':
            return { ...state, totalUsersCount: action.totalUsersCount }
        case 'TOGGLE_IS_FETCHING':
            return { ...state, isFetching: action.isFetching }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
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


export const actions = {
    followUser: (userId: number) => ({ type: 'FOLLOW', userId} as const),
    unfollowUser: (userId: number) => ({ type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage} as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const),
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const),
}

export const requestUsers = (requestedPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(requestedPage));
        let data = await usersAPI.getUsers(requestedPage, pageSize);
        
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleIsFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        let apiFollow = usersAPI.follow.bind(usersAPI);
        _followUnfollowFlow(dispatch, userId, apiFollow, actions.followUser);
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        let apiUnfollow = usersAPI.unfollow.bind(usersAPI);
        _followUnfollowFlow(dispatch, userId, apiUnfollow, actions.unfollowUser);
    }
}

export default usersReducer;

type DispatchType = Dispatch<ActionsType>;
type ThunkType = BaseThunkType<ActionsType>;
type ActionsType = InferActionsTypes<typeof actions>;