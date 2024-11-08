import Post from "./Post/Post";
import React, { FC } from "react";
import {TPost} from "../../../redux/state";
import styles from './MyPosts.module.css'

type TMyPostsProps = {
    postsData: Array<TPost>
    addPost: (postMessage: string) => void
}

const MyPosts:FC<TMyPostsProps> = ({postsData, addPost}) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        if (newPostElement.current) {
            const text = newPostElement.current?.value
            addPost(text)
        }
    }

    const posts = postsData.map((post) => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)

    return (
        <div className={styles.postsBlock}>My posts
            <div>
                <div><textarea ref={newPostElement}/></div>
                <button onClick={addNewPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;