import {v1} from "uuid";

export type TDialog = {
    id: string;
    name: string
}

export type TMessage = {
    id: string;
    message: string
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

type TMessagesPage = {
    messages: Array<TMessage>
    dialogs: Array<TDialog>
}

export type TState = {
    profilePage: TProfilePage
    dialogsPage: TMessagesPage
}

type StoreType = {
    _state: TState,
    addPost: () => void
    _callSubscriber: (state: TState) => void
    updateNewPostText: (text: string) => void
    subscribe: (observer: (state: TState) => void) => void
    getState: () => TState
}

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
    addPost() {
        const newPost: TPost = {
            id: v1(),
            likesCount: 14,
            message: this._state.profilePage.newPostText
        }

        this._state.profilePage.posts.push(newPost);
        this.updateNewPostText('')
        this._callSubscriber(this._state)
    },
    _callSubscriber(state: TState) {
        console.log('state changed')
    },
    updateNewPostText(text: string) {
        this._state.profilePage.newPostText = text
        this._callSubscriber(this._state);
    },
    subscribe(observer: (state: TState) => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    }

}


export default store;