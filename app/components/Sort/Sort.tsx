'use client'
import { translate } from "@/app/helpers/translate";
import React, { ReactNode, useEffect, useState } from "react";
import { SortProps } from "./Sort.props";

const Sort = ({ sortedData, sortedKeys, setData }: SortProps) => {
    const [activeKey, setActiveKey] = useState('')
    const [keys, setKeys] = useState<ReactNode[]>([<></>])
    useEffect(() => {
        if (activeKey) {
            setData(sortedData.filter((data) => data.tags.includes(activeKey)))
        }
        else{
            setData(sortedData)
        }
    }, [activeKey])
    useEffect(() => {
        setKeys(sortedKeys.map((key: string) => <div key={key} onClick={() => setActiveKey(key)}>{translate(key)}</div>))
    }, [])
    return (
        <div>
            {keys}
        </div>
    )
}

export default Sort