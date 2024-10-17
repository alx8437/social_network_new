import styles from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

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