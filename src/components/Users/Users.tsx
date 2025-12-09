import styles from "./users.module.css";
import avatar from "../../assets/images/defaultAvatar.png";
import React, {FC} from "react";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import { usersAPI} from "../../common/api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    users: UserType[]
    currentPage: number
    onPageChanged: (p: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingProgress: Array<number>
    toggleIsFollowingProgress: (isFollowingProgress: boolean, userId: number) => void
}

export const Users: FC<UsersPropsType> = ({
                                              pageSize,
                                              totalUsersCount,
                                              users,
                                              currentPage,
    onPageChanged,
    follow,
    unfollow,
                                              followingProgress,
                                              toggleIsFollowingProgress

}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p =>
                <span
                    onClick={() => onPageChanged(p)}
                    className={currentPage === p ? styles.selectedPage : ''}>{p}
                </span>)}
        </div>
        {users.map(user => {
            return <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img
                                        src={user.photos.small ? user.photos.small : avatar}
                                        alt="user_img"
                                        className={styles.userPhoto}
                                    />
                                </NavLink>
                            </div>
                            <div>
                                {user.followed ? <button
                                    onClick={() => {
                                        toggleIsFollowingProgress(true, user.id)
                                        usersAPI.unfollowUser(user.id).then(data => {
                                            if (data.resultCode === 0) {
                                                unfollow(user.id)
                                                toggleIsFollowingProgress(false, user.id)
                                            }

                                        })
                                    }} disabled={followingProgress.some(id => id === user.id)}>
                                    Unfollow
                                </button> : <button
                                    onClick={() => {
                                        toggleIsFollowingProgress(true, user.id)
                                        usersAPI.followUser(user.id).then(data => {
                                           if (data.resultCode === 0) {
                                               follow(user.id)
                                               toggleIsFollowingProgress(false, user.id)
                                           }
                                        })
                                    }} disabled={followingProgress.some(id => id === user.id)}>Follow</button>}
                            </div>
                        </span>
                <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                        </span>
            </div>
        })}
    </div>
}