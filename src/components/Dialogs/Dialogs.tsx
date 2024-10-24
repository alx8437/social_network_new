import {FC} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {TDialog, TMessage} from "../../index";
import styles from './Dialogs.module.css'

type TDialogPropsType = {
    dialogsData: Array<TDialog>
    messagesData: Array<TMessage>
}

const Dialogs:FC<TDialogPropsType> = ({dialogsData, messagesData}) => {


    const dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />)
    const messages = messagesData.map(message => <Message message={message.message} key={message.id} />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messages}
            </div>
        </div>
    );
};

export default Dialogs;