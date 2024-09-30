import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My posts
            <div><textarea/>
                <button>Add post</button>
            </div>
            <Post message='Hi! How are you?' likeCount={15}/>
            <Post message='This is my first post' likeCount={20}/>
        </div>
    )
}

export default MyPosts;