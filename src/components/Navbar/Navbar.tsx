import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css"


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}><NavLink className={({isActive}) => isActive ? `${styles.activeLink}` : ""
            } to='/profile'>Profile</NavLink></div>
            <div className={styles.item}><NavLink className={({isActive}) =>
                isActive ? `${styles.activeLink}` : ""
            } to='/dialogs'>Messages</NavLink></div>
            <div className={styles.item}><NavLink className={({isActive}) =>
                isActive ? `${styles.activeLink}` : ""
            } to='/users'>Users</NavLink></div>
            <div className={styles.item}><a>News</a></div>
            <div className={styles.item}><a>Music</a></div>
            <div className={styles.item}><a>Settings</a></div>
        </nav>
    )
}

export default Navbar