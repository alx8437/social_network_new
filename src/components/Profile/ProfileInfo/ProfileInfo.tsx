import React from 'react';
import styles from "./ProfileInfo.module.css";
import content from "../../../assets/images/content.jpg";
import {ProfileType} from "../../../redux/profileReducer";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    const {profile} = props;

    if (!profile) {
        return <Preloader />
    }

    const photo = profile.photos.small ? profile.photos.small : defaultAvatar

    return (
        <>
            <div className={styles.content}>
                <img src={content} alt="content"/>
            </div>
            <div className={styles.description}>
                <img src={photo} alt={'avatar'} />
                {profile.fullName}
                ava + description
            </div>
        </>
    );
};
