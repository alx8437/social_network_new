import {Dispatch} from "redux";
import {authAPI} from "../common/api";

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

const setAuthUserData = (userData: AuthType) => ({type: SET_USER_DATA, userData} as const)
export const setAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data));
        }
    })
}