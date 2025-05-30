import {TPost, TProfilePage} from "./store";
import {v1} from "uuid";
import {ActionTypes, ADD_POST, UPDATE_NEW_POST_TEXT} from "./actionsCreators";

const initialState = {
    posts: [
        {id: v1(), message: 'Hi! How are you?', likesCount: 15},
        {id: v1(), message: 'This is my first post', likesCount: 20}
    ],
    newPostText: 'New post text'
}

const profileReducer = (state: TProfilePage = initialState, action: ActionTypes) => {
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

export default profileReducer;