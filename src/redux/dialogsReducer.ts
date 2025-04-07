import {TDialogsPage} from "./store";
import {v1} from "uuid";
import {UPDATE_NEW_MESSAGE_TEXT, SEND_MESSAGE, ActionTypes} from "./actionsCreators";



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

const dialogsReducer = (state: TDialogsPage = initialState, action: ActionTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            const stateCopy = {...state}
            stateCopy.newMessageText = action.newMessageText;

            return stateCopy;
        }

        case SEND_MESSAGE: {
            const newMessage = {
                id: v1(),
                message: state.newMessageText,
            };
            const stateCopy = {...state};
            stateCopy.messages = [...stateCopy.messages]
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = '';

            return stateCopy;
        }


        default:
            return state;
    }
}

export default dialogsReducer;