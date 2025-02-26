import {ActionTypes, TDialogsPage} from "./store";
import {v1} from "uuid";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

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

const initialState = {
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

const dialogsReducer = (state: TDialogsPage = initialState, action: ActionTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;

            return state;
        case SEND_MESSAGE:
            const newMessage = {
                id: v1(),
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';

            return state;

        default:
            return state;
    }
}

export default dialogsReducer;