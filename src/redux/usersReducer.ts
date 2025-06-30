const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

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
}

const initialState: UserStateType = {
    users: []
}

type UsersActionsType =
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>

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

        default:
            return {...state}
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)