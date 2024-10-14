import styles from './Dialogs.module.css'

const Dialogs = (props: any) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + ' ' + styles.active}>Саша</div>
                <div className={styles.dialog}>Дима</div>
                <div className={styles.dialog}>Сергей</div>
                <div className={styles.dialog}>Никита</div>
                <div className={styles.dialog}>Андрей</div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}>I'm fine!</div>
            </div>
        </div>
    );
};

export default Dialogs;