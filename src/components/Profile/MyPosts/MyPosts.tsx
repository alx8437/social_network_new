import Post from "./Post/Post";
import React, { FC } from "react";
import {ActionTypes, addPostAC, UpdateNewPostTextAC, TPost} from "../../../redux/state";
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
            const newPostText = newPostElement.current.value
            dispatch(addPostAC(newPostText))
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current?.value
            dispatch(UpdateNewPostTextAC(text))
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