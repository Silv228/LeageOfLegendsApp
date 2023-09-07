'use client'
import React, { useEffect, useState } from "react";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.css"

const Search = ({ data, setFindEl, setPage }: SearchProps) => {
    const [subword, setSubword] = useState<string>('')
    useEffect(() => {
        setFindEl(data.filter((el) => el.name.toLowerCase().includes(subword.toLowerCase())))
    }, [subword])
    const changeHandler = (e) => {
        setPage && setPage(1)
        setSubword(e.target.value)
    }
    return (
        <div className={styles.searhArea}>
            <input className={styles.searhInput} onChange={(e) => changeHandler(e)} placeholder="Поиск..." value={subword} />
        </div>
    )
}

export default Search