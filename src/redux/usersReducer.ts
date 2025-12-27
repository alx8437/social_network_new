import {usersAPI} from "../common/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    status: string | null,
    photos: {
        small: string | null,
        large: string | null
    }
}

type UserStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}

const initialState: UserStateType = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

type UsersActionsType =
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleIsFollowingProgress>

export const usersReducer = (state: UserStateType = initialState, action: UsersActionsType): UserStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user)
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingProgress: action.isFollowingProgress ? [...state.followingProgress, action.userId] : state.followingProgress.filter(userId => userId !== action.userId)
            }
        }

        default:
            return {...state}
    }
}

export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFollowingProgress = (isFollowingProgress: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowingProgress, userId} as const)

export const getUsers= (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    })
}

export const followUser = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.followUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(userId))
            dispatch(toggleIsFollowingProgress(false, userId))
        }
    })
}

export const unfollowUser = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.unfollowUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollow(userId))
            dispatch(toggleIsFollowingProgress(false, userId))
        }
    })
}