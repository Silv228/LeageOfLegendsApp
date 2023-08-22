'use client'
import React, { useEffect, useReducer, useState } from "react";
import { searchReducer } from "./searchReducer";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.css"

const Search = ({ data, setFindEl }: SearchProps) => {
    const [subword, setSubword] = useState<string>('')
    const [state, dispatch] = useReducer(searchReducer, { data: data, showData: [] })
    useEffect(() => {
        dispatch({ word: subword })
    }, [subword])
    const changeHandler = (e) => {
        setSubword(e.target.value)
    }
    setFindEl(state.showData)
    return (
        <div className={styles.searhArea}>
            <input className={styles.searhInput} onChange={(e) => changeHandler(e)} placeholder="Поиск..." value={subword} />
        </div>
    )
}

export default Search