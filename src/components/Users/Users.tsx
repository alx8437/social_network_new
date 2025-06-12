import React, {FC} from 'react';
import {UserType} from "../../redux/usersReducer";
import styles from './users.module.css'

type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users:FC<UsersPropsType> = ({follow, setUsers, unfollow, users}) => {
    if( users.length === 0) {
        setUsers([
            {id: 1, photoUrl: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp', followed: true, fullName: 'Alex', status: 'I am a student', location: {city: 'Krasnodar', country: 'Russia'}},
            {id: 2, photoUrl: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp', followed: false, fullName: 'Dimych', status: 'I am teacher', location: {city: 'Batumi', country: 'Georgia'}},
        ])
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
