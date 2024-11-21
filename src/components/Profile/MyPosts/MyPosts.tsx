import Post from "./Post/Post";
import React, { FC } from "react";
import {TPost} from "../../../redux/state";
import styles from './MyPosts.module.css'

type TMyPostsProps = {
    postsData: Array<TPost>
    addPost: () => void
    newPostText: string
    updateNewPostText: (text: string) => void
}

const MyPosts:FC<TMyPostsProps> = ({postsData, addPost, newPostText, updateNewPostText}) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        if (newPostElement.current) {
            addPost()
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current?.value
            updateNewPostText(text)
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