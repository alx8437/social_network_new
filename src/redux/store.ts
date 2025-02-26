import {v1} from "uuid";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profileReducer";
import dialogsReducer, {sendMessageAC, updateNewMessageTextAC} from "./dialogsReducer";

export type TDialog = {
    id: string;
    name: string
}

export type TMessage = {
    id: string;
    message: string
}

export type TDialogsPage = {
    messages: Array<TMessage>
    dialogs: Array<TDialog>
    newMessageText: string
}

export type TPost = {
    id: string
    message: string
    likesCount: number
}

export type TProfilePage = {
    posts: Array<TPost>
    newPostText: string
}

export type TState = {
    profilePage: TProfilePage
    dialogsPage: TDialogsPage
}

export type StoreType = {
    _state: TState,
    _callSubscriber: (state: TState) => void
    subscribe: (observer: (state: TState) => void) => void
    getState: () => TState,
    dispatch: (action: ActionTypes) => void
}



export type ActionTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof updateNewMessageTextAC> |
    ReturnType<typeof sendMessageAC>

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi! How are you?', likesCount: 15},
                {id: v1(), message: 'This is my first post', likesCount: 20}
            ],
            newPostText: 'New post text'
        },
        dialogsPage: {
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'I\'m fine!'},
            ],
            dialogs: [
                {id: v1(), name: 'Sasha'},
                {id: v1(), name: 'Dima'},
                {id: v1(), name: 'Sergey'},
                {id: v1(), name: 'Nikita'},
                {id: v1(), name: 'Andrey'},
            ],
            newMessageText: 'new message!'
        },
    },
    _callSubscriber(state: TState) {
        console.log('state changed')
    },

    subscribe(observer: (state: TState) => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionTypes) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;