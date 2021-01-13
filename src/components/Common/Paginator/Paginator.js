import React from 'react';
import s from './Paginator.module.scss';

let Paginator = ({ currentPage, onPageChanged, totalUsersCount, pageSize, isAuth }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span
                    key={p}
                    className={currentPage === p ? s.selectedPage : undefined}
                    onClick={() => { onPageChanged(p) }}>{p}</span>
            })}
        </div>
    )
}

export default Paginator;