import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {addPost, TPost, updateNewPostText} from "../../../redux/profileReducer";

type MapStateToPropsType = {
    postsData: Array<TPost>
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.posts,
    }
}

const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {addPost, updateNewPostText})(MyPosts)

export default MyPostsContainer;