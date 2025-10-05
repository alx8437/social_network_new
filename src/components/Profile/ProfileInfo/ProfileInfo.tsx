import React from 'react';
import styles from "./ProfileInfo.module.css";
import content from "../../../assets/images/content.jpg";
import {ProfileType} from "../../../redux/profileReducer";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    const {profile} = props;
    const photo = profile.photos.small ? profile.photos.small : defaultAvatar

    return (
        <>
            <div className={styles.content}>
                <img src={content} alt="content"/>
            </div>
            <div className={styles.description}>
                <img src={photo} alt={'avatar'} />
                ava + description
            </div>
        </>
    );
};
