import styles from './Dialogs.module.css'
import { NavLink } from "react-router-dom";
import {v1} from "uuid";


type DialogItemProps = {
    name: string;
    id: string;
}

const DialogItem = (props: DialogItemProps) => {
    const {id, name} = props;

    return (
        <div>
            <NavLink className={({isActive}) => isActive ? `${styles.dialog} ${styles.active}` : styles.dialog}
                     to={id}>{name}
            </NavLink>
    </div>)
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    const { message } = props;

    return (
        <div className={styles.message}>{message}</div>
    )
}

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

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={'Саша'} id={'1'} />
                <DialogItem name={'Дима'} id={'2'} />
                <DialogItem name={'Сергей'} id={'3'} />
                <DialogItem name={'Никита'} id={'4'} />
                <DialogItem name={'Андрей'} id={'5'} />
            </div>
            <div className={styles.messages}>
                <Message message={'Hi'} />
                <Message message={'How are you?'} />
                <Message message={'I\'m fine!'} />
            </div>
        </div>
    );
};

export default Dialogs;