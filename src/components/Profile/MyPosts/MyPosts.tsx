import Post from "./Post/Post";
import React, { FC } from "react";
import {ActionTypes, AddPostActionType, TPost, UpdateNewPostTextActionType} from "../../../redux/state";
import styles from './MyPosts.module.css'

type TMyPostsProps = {
    postsData: Array<TPost>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const MyPosts:FC<TMyPostsProps> = ({postsData, newPostText, dispatch}) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        if (newPostElement.current) {
            const action: AddPostActionType = {type: "ADD_POST", postText: newPostElement.current.value};
            dispatch(action)
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current?.value
            const action: UpdateNewPostTextActionType = {type: "UPDATE_NEW_POST_TEXT", newText: text };
            dispatch(action)
        }
    }

    const posts = postsData.map((post) => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)

    return (
        <div className={styles.postsBlock}>My posts
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/></div>
                <button onClick={addNewPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;