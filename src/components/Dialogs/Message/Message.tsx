import styles from '../Dialogs.module.css'

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    const { message } = props;

    return (
        <div className={styles.message}>{message}</div>
    )
}


export default Message;