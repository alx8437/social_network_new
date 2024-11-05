import React, {FC} from "react";
import MyPosts from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {TPost} from "../../redux/state";

type TProfilePropsType = {
    state: {
        posts: Array<TPost>
    }
}

const Profile:FC<TProfilePropsType> = ({state}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={state.posts}/>
        </div>
    )
}

export default Profile;