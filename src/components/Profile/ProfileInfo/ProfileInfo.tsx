import React from 'react';
import styles from "./ProfileInfo.module.css";
import content from "../../../assets/images/content.jpg";

export const ProfileInfo = () => {
    return (
        <>
            <div className={styles.content}>
                <img src={content} alt="content"/>
            </div>
            <div className={styles.description}>ava + description</div>
        </>
    )
        ;
};
