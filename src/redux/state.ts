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
}

type TMessagesPage = {
    messages: Array<TMessage>
    dialogs: Array<TDialog>
}

export type TState = {
    profilePage: TProfilePage
    dialogsPage: TMessagesPage
}

const state: TState = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hi! How are you?', likesCount: 15},
            {id: v1(), message: 'This is my first post', likesCount: 20}
        ]
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
    }
}

export const addPost = (postMessage: string) => {
    const newPost: TPost = {
        id: v1(),
        likesCount: 14,
        message: postMessage
    }

    state.profilePage.posts.push(newPost);
}

export default state;