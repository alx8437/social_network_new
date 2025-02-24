import {ActionTypes, TDialogsPage} from "./state";
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

const dialogsReducer = (state: TDialogsPage, action: ActionTypes) => {
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