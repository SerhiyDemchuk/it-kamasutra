import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import s from './Users.module.scss';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    if (props.isAuth === false) return <Redirect to={'/login'} />

    return (
        <div className={s.item}>
            <div>
                {pages.map(p => {
                    return <span
                    key={p}
                    className={props.currentPage === p ? s.selectedPage : undefined}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.avatar} alt="" />
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => { props.unfollow(user.id) }}>Unfollow</button>

                                    : <button
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => { props.follow(user.id) }}>Follow</button>
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
                    </div>)
            }
        </div>
    )
}

export default Users;