const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type UserLocationType = {
    city: string,
    country: string
}

export type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: UserLocationType
}

type UserStateType = {
    users: Array<UserType>
}

const initialState: UserStateType = {
    users: [
        {id: 1, followed: true, fullName: 'Alex', status: 'I am a student', location: {city: 'Krasnodar', country: 'Russia'}},
        {id: 2, followed: false, fullName: 'Dimych', status: 'I am teacher', location: {city: 'Batumi', country: 'Georgia'}},
    ]
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
                users: [...state.users, ...action.users]
            }
        }

        default:
            return {...state}
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)