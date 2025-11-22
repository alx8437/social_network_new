const SET_USER_DATA = 'SET_USER_DATA'

export type AuthType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthType = {
    email: null,
    userId: null,
    login: null,
    isAuth: false
}

type AuthActionsType =
    ReturnType<typeof setAuthUserData>

export const authReducer = (state: AuthType = initialState, action: AuthActionsType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.userData,
                isAuth: true
            }
        }

        default:
            return {...state}
    }
}

export const setAuthUserData = (userData: AuthType) => ({type: SET_USER_DATA, userData} as const)