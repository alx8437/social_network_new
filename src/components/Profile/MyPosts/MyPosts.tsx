import Post from "./Post/Post";
import React, { FC } from "react";
import {TPost} from "../../../redux/state";
import styles from './MyPosts.module.css'

type TMyPostsProps = {
    postsData: Array<TPost>
}

const MyPosts:FC<TMyPostsProps> = ({postsData}) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        const text = newPostElement.current?.value
        alert(text)
    }

    const posts = postsData.map((post) => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)

    return (
        <div className={styles.postsBlock}>My posts
            <div>
                <div><textarea ref={newPostElement}/></div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;