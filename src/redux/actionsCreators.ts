export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text,
    } as const
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

export type ActionTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof updateNewMessageTextAC> |
    ReturnType<typeof sendMessageAC>