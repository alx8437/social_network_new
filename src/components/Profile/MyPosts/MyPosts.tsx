import Post from "./Post/Post";
import styles from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={styles.postsBlock}>My posts
            <div>
                <div><textarea/></div>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message='Hi! How are you?' likeCount={15}/>
                <Post message='This is my first post' likeCount={20}/>
            </div>
        </div>
    )
}

export default MyPosts;