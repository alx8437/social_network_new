import {ActionTypes, TPost, TProfilePage} from "./store";
import {v1} from "uuid";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText,
    } as const
}

const initialState = {
    posts: [
        {id: v1(), message: 'Hi! How are you?', likesCount: 15},
        {id: v1(), message: 'This is my first post', likesCount: 20}
    ],
    newPostText: 'New post text'
}

const profileReducer = (state: TProfilePage = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: TPost = {
                id: v1(),
                likesCount: 14,
                message: state.newPostText
            }
            state.posts.push(newPost);
            state.newPostText = ''

            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;

            return state

        default:
            return state
    }
}

export default profileReducer;