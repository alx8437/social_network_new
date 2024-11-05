import {FC} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import styles from './Dialogs.module.css'
import {TDialog, TMessage} from "../../redux/state";

type TDialogPropsType = {
    state: {
        dialogs: Array<TDialog>
        messages: Array<TMessage>
    }
}

const Dialogs:FC<TDialogPropsType> = ({state}) => {

    const dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />)
    const messagesData = state.messages.map(message => <Message message={message.message} key={message.id} />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesData}
            </div>
        </div>
    );
};

export default Dialogs;