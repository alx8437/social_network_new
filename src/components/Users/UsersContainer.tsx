import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";
import Users from "./Users";

type MapStateToPropsType = {
    users: UserType[]
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UserContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer;