import React, {FC} from "react";
import {TPost} from "../../../redux/store";
import {ActionTypes, addPostAC, updateNewPostTextAC} from "../../../redux/actionsCreators";
import MyPosts from "./MyPosts";

type TMyPostsContainerProps = {
    postsData: Array<TPost>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const MyPostsContainer: FC<TMyPostsContainerProps> = ({postsData, newPostText, dispatch}) => {
    const addPost = () => {
        dispatch(addPostAC())
    }

    const updateNewPostText = (text: string) => {
        const action = updateNewPostTextAC(text)
        dispatch(action);
    }

    return (<MyPosts newPostText={newPostText} postsData={postsData} updateNewPostText={updateNewPostText}
                     addPost={addPost}/>)
}

export default MyPostsContainer;