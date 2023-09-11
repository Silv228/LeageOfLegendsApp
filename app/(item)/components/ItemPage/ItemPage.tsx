'use client'
import React, { useEffect, useState } from 'react'
import ItemDesc from '@/app/(item)/components/ItemDesc/ItemDesc'
import styles from './ItemPage.module.css'
import { ItemPageProps } from './ItemPage.props'
import ItemCard from '@/app/components/ItemCard/ItemCard'
import Search from '@/app/components/Search/Search'
import Sort from '@/app/components/Sort/Sort'

const ItemPage = ({ itemsArray, tags, itemsObj, setItemsArray, initItemsArray }: ItemPageProps) => {
    const [infoOpen, setInfoOpen] = useState<boolean>(false)
    const [id, setId] = useState<string>()
    const [items, setItems] = useState(itemsArray)
    useEffect(() => {
        setItems(itemsArray)
    }, [itemsArray])
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Search data={itemsArray} setFindEl={setItems} />
                <Sort resetValue='Все' sortedKeys={['Все', ...tags]} sortedData={initItemsArray} setData={setItemsArray} />
            </div>
            <div className={styles.itemsGrid}>
                {items.map((item) => { if (item.gold.total > 0) return <ItemCard onClick={() => { setInfoOpen(true); setId(item.id) }} description={item.description} into={item.into} id={item.id ?? ''} info={item.plaintext} gold={item.gold} key={item.id} img={item.image.full} name={item.name} /> })}
            </div>
            {
                infoOpen && <div>
                    <div onClick={() => setInfoOpen(false)} className={styles.background}></div>
                    <ItemDesc setId={setId} itemsObj={itemsObj} data={initItemsArray.find((item) => item.id === id)} setInfoOpen={setInfoOpen} />
                </div>
            }
        </div>
    )
}
export default ItemPage