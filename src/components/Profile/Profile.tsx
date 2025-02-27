import React, {FC} from "react";
import MyPosts from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { TPost} from "../../redux/store";
import {ActionTypes} from "../../redux/actionsCreators";

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
            <MyPosts newPostText={state.newPostText} dispatch={dispatch} postsData={state.posts}/>
        </div>
    )
}

export default Profile;