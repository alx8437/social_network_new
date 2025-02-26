import {ChangeEvent, FC} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import styles from './Dialogs.module.css'
import {ActionTypes, TDialog, TMessage } from "../../redux/store";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";

type TDialogPropsType = {
    state: {
        dialogs: Array<TDialog>
        messages: Array<TMessage>
        newMessageText: string
    },
    dispatch: (action: ActionTypes) => void
}

const Dialogs:FC<TDialogPropsType> = ({state, dispatch}) => {

    const dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />)
    const messagesData = state.messages.map(message => <Message message={message.message} key={message.id} />)


    const onChangeMessageValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = e.currentTarget.value;
        dispatch(updateNewMessageTextAC(newMessageText));
    }

    const onSendMessageClick = () => {
        dispatch(sendMessageAC())
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesData}</div>
                <div>
                    <div>
                        <textarea
                            placeholder='Enter your message'
                            value={state.newMessageText}
                            onChange={onChangeMessageValue}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;