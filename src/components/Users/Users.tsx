import React from 'react';
import {UserType} from "../../redux/usersReducer";
import avatar from '../../assets/images/avatar.png'
import styles from './users.module.css'
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => <span onClick={(e) => this.onPageChanged(p)} className={this.props.currentPage === p ? styles.selectedPage : ''}>{p}</span>)}
                </div>
                {this.props.users.map(user => {
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
                                {user.followed ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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
    }
}

export default Users;

// export const Users:FC<UsersPropsType> = ({follow, setUsers, unfollow, users}) => {
//     const getUsers = () => {
//         if( users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//                 console.log(response.data.items)
//                 setUsers(response.data.items)
//             })
//         }
//
//     }
//
//     return (
//         <div>
//             <button onClick={getUsers}>Get users</button>
//             {users.map(user => {
//                 return <div key={user.id}>
//                     <span>
//                         <div>
//                             <img
//                                 src={user.photos.small ? user.photos.small : avatar}
//                                 alt="user_img"
//                                 className={styles.userPhoto}
//                             />
//                         </div>
//                         <div>
//                             {user.followed ? <button onClick={() => unfollow(user.id)}>Unfollow</button> : <button onClick={() => follow(user.id)}>Follow</button>}
//                         </div>
//                     </span>
//                     <span>
//                         <span>
//                             <div>{user.name}</div>
//                             <div>{user.status}</div>
//                         </span>
//                     </span>
//                 </div>
//             })}
//         </div>
//     );
// };
