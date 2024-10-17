import styles from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const Dialogs = (props: any) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div>
                    <NavLink className={({isActive}) => isActive ? `${styles.dialog} ${styles.active}` : styles.dialog}
                            to='1'>Саша</NavLink>
                </div>
                <div>
                    <NavLink  className={({isActive}) => isActive ? `${styles.dialog} ${styles.active}` : styles.dialog}
                            to='2'>Дима</NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => isActive ? `${styles.dialog} ${styles.active}` : styles.dialog}
                            to='3'>Сергей</NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => isActive ? `${styles.dialog} ${styles.active}` : styles.dialog}
                            to='4'>Никита</NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => isActive ? `${styles.dialog} ${styles.active}` : styles.dialog}
                            to='5'>Андрей</NavLink>
                </div>
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