import styles from '../Dialogs.module.css'
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

export default DialogItem;