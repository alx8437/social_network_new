import styles from './Dialogs.module.css'
import {v1} from "uuid";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props: any) => {
    const dialogsData = [
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Sergey'},
        {id: v1(), name: 'Nikita'},
        {id: v1(), name: 'Andrey'},
    ]

    const messagesData = [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'I\'m fine!'},
    ]

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