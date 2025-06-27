import React, {FC} from 'react';
import {UserType} from "../../redux/usersReducer";
import styles from './users.module.css'
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users:FC<UsersPropsType> = ({follow, setUsers, unfollow, users}) => {
    if( users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            setUsers(response.data.items)
        })
    }

    return (
        <div>
            {users.map(user => {
                return <div key={user.id}>
                    <span>
                        <div>
                            <img
                                src={user.photoUrl}
                                alt="Профиль"
                                className={styles.userPhoto}
                            />
                        </div>
                        <div>
                            {user.followed ? <button onClick={() => unfollow(user.id)}>Unfollow</button> : <button onClick={() => follow(user.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>
            })}
        </div>
    );
};
