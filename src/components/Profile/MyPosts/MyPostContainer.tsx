import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";
import {addPostAC, TPost, updateNewPostTextAC} from "../../../redux/profileReducer";


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
        postsData: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;