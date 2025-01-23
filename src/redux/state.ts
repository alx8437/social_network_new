import {v1} from "uuid";

export type TDialog = {
    id: string;
    name: string
}

export type TMessage = {
    id: string;
    message: string
}

type TMessagesPage = {
    messages: Array<TMessage>
    dialogs: Array<TDialog>
}

export type TPost = {
    id: string
    message: string
    likesCount: number
}

type TProfilePage = {
    posts: Array<TPost>
    newPostText: string
}


export type TState = {
    profilePage: TProfilePage
    dialogsPage: TMessagesPage
}

type StoreType = {
    _state: TState,
    _callSubscriber: (state: TState) => void
    subscribe: (observer: (state: TState) => void) => void
    getState: () => TState,
    dispatch: (action: ActionTypes) => void
}

export type AddPostActionType = {
    type: "ADD_POST",
    postText: string
}

export type UpdateNewPostTextActionType = {
    type: "UPDATE_NEW_POST_TEXT",
    newText: string
}

export type ActionTypes = AddPostActionType | UpdateNewPostTextActionType

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
        if (action.type === "ADD_POST") {
                const newPost: TPost = {
                    id: v1(),
                    likesCount: 14,
                    message: action.postText
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)
        } else if (action.type === "UPDATE_NEW_POST_TEXT") {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
        }
    }
}

export default store;