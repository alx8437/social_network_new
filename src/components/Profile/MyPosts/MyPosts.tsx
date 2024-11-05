import Post from "./Post/Post";
import {FC} from "react";
import {TPost} from "../../../redux/state";
import styles from './MyPosts.module.css'

type TMyPostsProps = {
    postsData: Array<TPost>
}

const MyPosts:FC<TMyPostsProps> = ({postsData}) => {

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