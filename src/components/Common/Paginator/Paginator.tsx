import React, { useState } from 'react';
import styles from './Paginator.module.scss';
import cn from 'classnames';

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({ currentPage, onPageChanged, totalUsersCount, pageSize, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 2;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (<div className={cn(styles.paginator)}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            }
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span
                        key={p}
                        // className={currentPage === p ? s.selectedPage : undefined}
                        className={cn({[styles.selectedPage] : currentPage === p}, styles.pageNumber)}
                        onClick={() => { onPageChanged(p) }}>{p}</span>
                })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
            }
        </div>
    )
}

export default Paginator;