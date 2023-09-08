'use client'
import { translate } from "@/app/helpers/translate";
import React, { ReactNode, useEffect, useState } from "react";
import { SortProps } from "./Sort.props";
import styles from "./Sort.module.css"
import FilterIcon from "./filter-svgrepo-com.svg"
import Image from "next/image";

const Sort = ({ resetValue, sortedData, sortedKeys, setData }: SortProps) => {
    const [activeKey, setActiveKey] = useState(resetValue)
    const [keys, setKeys] = useState<ReactNode[]>([<></>])
    const [showFilters, setShowFilters] = useState(false)
    useEffect(() => {
        if (activeKey !== resetValue) {
            setData(sortedData.filter((data) => data.tags.includes(activeKey)))
        }
        else {
            setData(sortedData)
        }
    }, [activeKey])
    useEffect(() => {
        setKeys(sortedKeys.map((key: string) => <div className={styles.filterItem} key={key} onClick={() => setActiveKey(key)}>{translate(key)}</div>))
    }, [])
    return (
        <div>
            <Image onClick={() => setShowFilters(!showFilters)} className={styles.filterIcon} src={FilterIcon} alt="filter" width={32} height={32} />
            <div className={!showFilters ? styles.hideFilters : styles.filters}>
                {keys}
            </div>
        </div>
    )
}

export default Sort