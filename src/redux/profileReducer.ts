import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../common/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type TPost = {
    id: string
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null,
    }
}

export type TProfilePage = {
    posts: Array<TPost>
    newPostText: string
    profile: ProfileType | null
}

const initialState: TProfilePage= {
    posts: [
        {id: v1(), message: 'Hi! How are you?', likesCount: 15},
        {id: v1(), message: 'This is my first post', likesCount: 20}
    ],
    newPostText: 'New post text',
    profile: null
}

const profileReducer = (state: TProfilePage = initialState, action: ProfileActionTypes) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: TPost = {
                id: v1(),
                likesCount: 14,
                message: state.newPostText
            }

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state
    }
}

export type ProfileActionTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostText> |
    ReturnType<typeof setUserProfile>
export const addPost = () => {
    return {
        type: ADD_POST,
    } as const
}

export const updateNewPostText = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text,
    } as const
}

const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const setUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    })
}

export default profileReducer;