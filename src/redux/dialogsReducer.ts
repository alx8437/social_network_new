import {v1} from "uuid";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type TDialog = {
    id: string;
    name: string
}

export type TDialogsPage = {
    messages: Array<TMessage>
    dialogs: Array<TDialog>
    newMessageText: string
}

export type TMessage = {
    id: string;
    message: string
}

const initialState: TDialogsPage = {
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
}

const dialogsReducer = (state: TDialogsPage = initialState, action: DialogsActionTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        }

        case SEND_MESSAGE: {
            const newMessage = {
                id: v1(),
                message: state.newMessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        }


        default:
            return state;
    }
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}

export const updateNewMessageTextAC = (messageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: messageText,
    } as const
}

export type  DialogsActionTypes =
    ReturnType<typeof updateNewMessageTextAC> |
    ReturnType<typeof sendMessageAC>

export default dialogsReducer;