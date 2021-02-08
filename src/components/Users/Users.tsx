import React from 'react';
import { userType } from '../../types/types';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';
import s from './Users.module.scss';

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    users: Array<userType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

let Users: React.FC<PropsType> = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, follow, unfollow, followingInProgress, ...props }) => {
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