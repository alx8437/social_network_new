import React, {FC} from "react";
import MyPosts from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {TPost} from "../../redux/state";

type TProfilePropsType = {
    state: {
        posts: Array<TPost>
        newPostText: string
    },
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const Profile:FC<TProfilePropsType> = ({state, addPost, updateNewPostText}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts newPostText={state.newPostText} updateNewPostText={updateNewPostText} addPost={addPost}  postsData={state.posts}/>
        </div>
    )
}

export default Profile;