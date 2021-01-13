import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';
import s from './Users.module.scss';

let Users = ({ currentPage, onPageChanged, isAuth, totalUsersCount, pageSize, users, follow, unfollow, followingInProgress, ...props }) => {
    return (
        <div className={s.item}>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            <div>
                {
                    users.map(user => <User
                        user={user}
                        key={user.id}
                        followingInProgress={followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                    />
                    )
                }
            </div>
        </div>
    )
}

export default Users;