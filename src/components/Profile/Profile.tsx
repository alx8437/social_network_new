import React, {FC} from "react";
import MyPosts from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {TPost} from "../../index";

type TProfilePropsType = {
    postsData: Array<TPost>
}

const Profile:FC<TProfilePropsType> = ({postsData}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={postsData}/>
        </div>
    )
}

export default Profile;