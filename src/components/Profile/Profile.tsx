import React, {FC} from "react";
import MyPosts from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {TPost} from "../../redux/state";

type TProfilePropsType = {
    state: {
        posts: Array<TPost>
    },
    addPost: (postMessage: string) => void
}

const Profile:FC<TProfilePropsType> = ({state, addPost}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts addPost={addPost}  postsData={state.posts}/>
        </div>
    )
}

export default Profile;