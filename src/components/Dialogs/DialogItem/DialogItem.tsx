import styles from '../Dialogs.module.css'
import { NavLink } from "react-router-dom";

type DialogItemProps = {
    name: string;
    id: string;
}

const DialogItem = (props: DialogItemProps) => {
    const {id, name} = props;

    return (
        <div className={styles.dialogsItem}>
            <div className={styles.avatar}>Ava</div>
            <NavLink activeClassName={`${styles.dialog} ${styles.active}`} className={styles.dialog}
                     to={id}>{name}
            </NavLink>
    </div>)
}

export default DialogItem;