import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../redux/profileReducer";
import {Redirect} from "react-router-dom";

type ProfilePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

const Profile = (props: ProfilePropsType) => {
    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;