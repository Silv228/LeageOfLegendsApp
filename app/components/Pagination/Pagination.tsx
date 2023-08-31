import React, { ReactNode } from "react";
import { PaginationProps } from './Pagination.props'
import styles from './Pagination.module.css'

const Pagination = ({ page, maxPage, setPage }: PaginationProps) => {
    let pages: ReactNode[] = []
    for(let i = 1; i <= maxPage; i++) {
        pages.push(<div className={`${styles.pageNum} ${i === page ? styles.activePage : ''}`} onClick={() => setPage(i)} key={i}>{i}</div>)
    }
    return (
        <div className={styles.paginator}>
            {pages}
        </div>
    )
}

export default Pagination