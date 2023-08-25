'use client'
import React, { useState } from 'react'
import ItemDesc from '@/app/(item)/components/ItemDesc/ItemDesc'
import styles from './ItemPage.module.css'
import { ItemPageProps } from './ItemPage.props'
import ItemCard from '@/app/components/ItemCard/ItemCard'
import Search from '@/app/components/Search/Search'

const ItemPage = ({ itemsArray, itemsObj }: ItemPageProps) => {
    const [infoOpen, setInfoOpen] = useState<boolean>(false)
    const [id, setId] = useState<string>()
    const [items, setItems] = useState(itemsArray)
    const itemGrid = items.map((item, i) => { if (item.gold.total > 0) return <ItemCard onClick={() => { setInfoOpen(true); setId(item.id) }} description={item.description} into={item.into} id={item.id ?? ''} info={item.plaintext} gold={item.gold} key={item.id} img={item.image.full} name={item.name} /> })

    return (
        <div className={styles.wrapper}>
            <Search data={itemsArray} setFindEl={setItems} />
            <div className={styles.itemsGrid}>
                {itemGrid}
            </div>
            {
                infoOpen && <div>
                    <div onClick={() => setInfoOpen(false)} className={styles.background}></div>
                    <ItemDesc setId={setId} itemsObj={itemsObj} data={itemsArray.find((item) => item.id === id)} setInfoOpen={setInfoOpen} />
                </div>
            }
        </div>
    )
}
export default ItemPage