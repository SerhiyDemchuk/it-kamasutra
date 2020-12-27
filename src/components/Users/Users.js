import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.scss';
import { followUsers, unfollowUsers } from '../../api/api';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.item}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.avatar} alt="" />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {unfollowUsers(props.unfollow, user.id)}}>Unfollow</button>
                                : <button onClick={() => {followUsers(props.follow, user.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name} {user.surname}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            {/* <div>{user.location.country}</div> */}
                            {/* <div>{user.location.city}</div> */}
                        </span>
                    </span>
                    <div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;