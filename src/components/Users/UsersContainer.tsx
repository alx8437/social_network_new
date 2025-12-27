import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    toggleIsFollowingProgress,
    UserType, getUsers, followUser, unfollowUser
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}

type MapDispatchToPropsType = {
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setCurrentPage: (page: number) => void
    toggleIsFollowingProgress: (isFollowingProgress: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching && <Preloader />}
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    unfollowUser={this.props.unfollowUser}
                    followUser={this.props.followUser}
                    followingProgress={this.props.followingProgress}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                />
            </>
        );
    }
}

const UserContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    followUser,
    unfollowUser,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers
})(UsersContainer)

export default UserContainer;