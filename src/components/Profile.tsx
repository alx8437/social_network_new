import React from "react";
import content from "../assets/images/content.jpg";
import styles from './Profile.module.css'


const Profile = () => {
    return <div className={styles.content}>
        <div><img src={content} alt="content"/></div>
        <div>ava + description</div>
        <div>My posts
            <div>New post</div>
            <div className={styles.item}>post1</div>
            <div className={styles.item}>post2</div>
        </div>
    </div>
}

export default Profile;