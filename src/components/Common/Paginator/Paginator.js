import React, { useState } from 'react';
import s from './Paginator.module.scss';
import cn from 'classnames';

let Paginator = ({ currentPage, onPageChanged, totalUsersCount, pageSize, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 2;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            }
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span
                        key={p}
                        // className={currentPage === p ? s.selectedPage : undefined}
                        className={cn({[s.selectedPage] : currentPage === p}, s.pageNumber)}
                        onClick={() => { onPageChanged(p) }}>{p}</span>
                })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
            }
        </div>
    )
}

export default Paginator;