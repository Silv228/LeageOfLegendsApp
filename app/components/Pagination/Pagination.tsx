'use client'
import React, { ReactNode, useEffect, useState } from "react";
import { PaginationProps } from './Pagination.props'
import styles from './Pagination.module.css'

const Pagination = ({ page, maxPage, setPage, type = 'full' }: PaginationProps) => {
    let pages: ReactNode[] = []
    const [initPage, setInitPage] = useState(1)
    const [lenPages, setLenPages] = useState(maxPage - 1)
    for (let i = initPage; (i < initPage + lenPages) && (i < maxPage); i++) {
        pages.push(<div className={`${styles.pageNum} ${i === page ? styles.activePage : ''}`} onClick={() => setPage(i)} key={i}>{i}</div>)
    }
    const pagesStructure = (pagesCount: number) => {
        if (page + pagesCount <= maxPage) {
            setInitPage(page)
            setLenPages(pagesCount)
        }
        else {
            setInitPage(Math.max(1, maxPage - pagesCount))
            setLenPages(maxPage - 1)
        }
    }
    useEffect(() => {
        switch (type) {
            case 'medium':
                pagesStructure(7)
                break;
            case 'short':
                pagesStructure(3)
                break;
            case 'full':
                pagesStructure(maxPage - 1)
                break;
            default:
                break;
        }
    })
    return (
        <div className={styles.paginator}>
            <button disabled={page === 1} className={styles.pageNav} onClick={() => setPage(page - 1)}>{"<"}</button>
            {pages} {(initPage + lenPages) < maxPage && <>&nbsp;</>}
            <div className={`${styles.pageNum} ${page === maxPage ? styles.activePage : ''}`} onClick={() => setPage(maxPage)}>{maxPage}</div>
            <button disabled={page === maxPage} className={styles.pageNav} onClick={() => setPage(page + 1)}>{">"}</button>
        </div>
    )
}

export default Pagination