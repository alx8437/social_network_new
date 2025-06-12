import {v1} from "uuid";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export type TPost = {
    id: string
    message: string
    likesCount: number
}

export type TProfilePage = {
    posts: Array<TPost>
    newPostText: string
}

const initialState = {
    posts: [
        {id: v1(), message: 'Hi! How are you?', likesCount: 15},
        {id: v1(), message: 'This is my first post', likesCount: 20}
    ],
    newPostText: 'New post text'
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

        default:
            return state
    }
}

export type ProfileActionTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text,
    } as const
}

export default profileReducer;