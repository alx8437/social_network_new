import React from "react";
import content from "../../assets/images/content.jpg";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return <div className={styles.content}>
        <div><img src={content} alt="content"/></div>
        <div>ava + description</div>
        <MyPosts />
    </div>
}

export default Profile;