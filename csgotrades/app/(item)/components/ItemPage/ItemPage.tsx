'use client'
import React, { useState } from 'react'
import ItemDesc from '@/app/(item)/components/ItemDesc/ItemDesc'
import styles from './ItemPage.module.css'
import { ItemPageProps } from './ItemPage.props'
import ItemCard from '@/app/components/ItemCard/ItemCard'

const ItemPage = ({ itemsArray }: ItemPageProps) => {
    const [infoOpen, setInfoOpen] = useState<boolean>(false)
    const [id, setId] = useState<string>()
    const itemGrid = itemsArray.map(item => { if (item.gold.total !== 0) return <ItemCard onClick={() => { setInfoOpen(true); setId(item.id) }} description={item.description} into={item.into} id={item.id ?? ''} info={item.plaintext} gold={item.gold} key={item.id} img={item.image.full} name={item.name} /> })
    return (
        <div className={styles.wrapper}>
            {itemGrid}
            {
                infoOpen && <>
                    <div onClick={() => setInfoOpen(false)} className={styles.background}></div>
                    <ItemDesc id={id ?? ''} setInfoOpen={setInfoOpen} />
                </>
            }
        </div>
    )
}
export default ItemPage