'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './ItemCard.module.css'
import { ItemsCardProps } from './ItemCard.props'
import ItemDesc from '@/app/(item)/components/ItemDesc/ItemDesc'

const ItemCard = ({ name, img, info, id, gold }: ItemsCardProps) => {
    const [infoOpen, setInfoOpen] = useState<boolean>(false)
    const openInfo = () => {
        setInfoOpen(!infoOpen)
    }
    return (
        <>
            <div className={styles.card} onClick={(e) => openInfo()}>
                <Image alt={img} width={50} height={50} src={'http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/' + img} />
                <div className={styles.name}>{name}</div>
            </div>

            {
                infoOpen && <>
                    <div onClick={() => setInfoOpen(false)} className={styles.background}></div>
                    <ItemDesc id={id} setInfoOpen={setInfoOpen} />
                </>
            }
        </>
    )
}
export default ItemCard