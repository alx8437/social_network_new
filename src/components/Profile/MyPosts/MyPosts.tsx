import Post from "./Post/Post";
import styles from './MyPosts.module.css'
import {v1} from "uuid";

const MyPosts = () => {
    const postsData = [
        {id: v1(), message: 'Hi! How are you?', likesCount: 15},
        {id: v1(), message: 'This is my first post', likesCount: 20}
    ]

    const posts = postsData.map((post) => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)

    return (
        <div className={styles.postsBlock}>My posts
            <div>
                <div><textarea/></div>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;