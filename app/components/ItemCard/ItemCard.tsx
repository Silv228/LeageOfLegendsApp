'use client'
import React from 'react'
import Image from 'next/image'
import styles from './ItemCard.module.css'
import { ItemsCardProps } from './ItemCard.props'

const ItemCard = ({ name, img, info, id, gold, ...props }: ItemsCardProps) => {
    return (
        <div className={styles.card} {...props}>
            <Image alt={img} width={64} height={64} src={'http://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/' + img} />
            <div className={styles.name}>{name}</div>
        </div>
    )
}
export default ItemCard