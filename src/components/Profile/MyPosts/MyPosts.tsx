import Post from "./Post/Post";
import React, { FC } from "react";
import styles from './MyPosts.module.css'
import {TPost} from "../../../redux/profileReducer";

type TMyPostsProps = {
    postsData: Array<TPost>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts:FC<TMyPostsProps> = ({postsData, newPostText, addPost, updateNewPostText}) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>()


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
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={newPostText}
                    />
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;