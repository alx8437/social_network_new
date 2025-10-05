import styles from "./users.module.css";
import avatar from "../../assets/images/defaultAvatar.png";
import React, {FC} from "react";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    users: UserType[]
    currentPage: number
    onPageChanged: (p: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users: FC<UsersPropsType> = ({
                                              pageSize,
                                              totalUsersCount,
                                              users,
                                              currentPage,
    onPageChanged,
    follow,
    unfollow
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
                    onClick={(e) => onPageChanged(p)}
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
                                    onClick={() => unfollow(user.id)}>
                                    Unfollow
                                </button> : <button onClick={() => follow(user.id)}>Follow</button>}
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