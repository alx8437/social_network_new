import React, {FC} from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { TPost} from "../../redux/store";
import {ActionTypes} from "../../redux/actionsCreators";
import MyPostsContainer from "./MyPosts/MyPostContainer";

type TProfilePropsType = {
    state: {
        posts: Array<TPost>
        newPostText: string
    },
    dispatch: (action: ActionTypes) => void
}

const Profile:FC<TProfilePropsType> = ({state, dispatch}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer newPostText={state.newPostText} dispatch={dispatch} postsData={state.posts}/>
        </div>
    )
}

export default Profile;