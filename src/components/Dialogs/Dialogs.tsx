import {ChangeEvent, FC} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import styles from './Dialogs.module.css'
import {TDialogsPage} from "../../redux/dialogsReducer";

type TDialogPropsType = {
    dialogsPage: TDialogsPage
    onChangeMessage: (text: string) => void
    sendMessage: () => void
}

const Dialogs:FC<TDialogPropsType> = (
    {
        dialogsPage,
        onChangeMessage,
        sendMessage,
    }) => {

    const dialogsElements = dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />)
    const messagesData = dialogsPage.messages.map(message => <Message message={message.message} key={message.id} />)


    const onChangeMessageValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = e.currentTarget.value;
        onChangeMessage(newMessageText)
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
                            value={dialogsPage.newMessageText}
                            onChange={onChangeMessageValue}
                        />
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;