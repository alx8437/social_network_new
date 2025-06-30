import React, {FC} from 'react';
import {UserType} from "../../redux/usersReducer";
import avatar from '../../assets/images/avatar.png'
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
            console.log(response.data.items)
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
                                src={user.photos.small ? user.photos.small : avatar}
                                alt="user_img"
                                className={styles.userPhoto}
                            />
                        </div>
                        <div>
                            {user.followed ? <button onClick={() => unfollow(user.id)}>Unfollow</button> : <button onClick={() => follow(user.id)}>Follow</button>}
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
    );
};
