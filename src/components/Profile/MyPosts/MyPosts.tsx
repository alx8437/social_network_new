import Post from "./Post/Post";
import styles from './MyPosts.module.css'
import {TPost} from "../../../index";
import {FC} from "react";

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