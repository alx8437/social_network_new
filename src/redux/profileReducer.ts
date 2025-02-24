import {ActionTypes, TPost, TProfilePage} from "./state";
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

const profileReducer = (state: TProfilePage, action: ActionTypes) => {
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