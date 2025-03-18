import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/actionsCreators";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                const updateNewPostText = (text: string) => {
                    const action = updateNewPostTextAC(text)
                    store.dispatch(action);
                }


                return <MyPosts newPostText={store.getState().profilePage.newPostText} postsData={store.getState().profilePage.posts} updateNewPostText={updateNewPostText}
                                addPost={addPost}/>
            }}

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;