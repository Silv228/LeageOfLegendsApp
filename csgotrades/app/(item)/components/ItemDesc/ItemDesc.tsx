'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./ItemDesc.module.css"
import { ItemDescProps } from "./ItemDesc.props";
import { IItems } from "@/interfaces/items.interface";

const ItemDesc = ({ id, setInfoOpen, ...props }: ItemDescProps) => {
    const [data, setData] = useState<IItems>()
    const [stateId, setStateId] = useState<string>(id)
    const itemData = data && data.data[stateId]
    useEffect(() => {
        const getData = async () => {
            const data = await fetch('http://ddragon.leagueoflegends.com/cdn/13.14.1/data/ru_RU/item.json',
                {
                    method: 'GET'
                }
            )
            setData(await data.json())
        }
        getData()
    }, [])

    return (
        <div {...props}>
            {itemData && <div className={styles.infoFull} {...props}>
                <div className={styles.headInfo} onClick={(e) => setInfoOpen(false)}>
                    <div className={styles.nameBlock}>
                        <Image alt={itemData?.image.full ?? 'item'} width={50} height={50} src={'http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/' + itemData?.image.full} />
                        <div>
                            <div className={styles.name}>{itemData?.name}</div>
                            <div className={styles.plaintext}>{itemData?.plaintext}</div>
                        </div>
                    </div>
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: itemData?.description ?? <></> }} />
                    <div className={styles.price}><span className={styles.label}>Стоимость</span> {itemData?.gold.total}({itemData?.gold.base})</div>
                </div>
                {itemData.into &&
                    <>
                        <div className={styles.majorLabel}>В сборках</div>
                        <div className={styles.into}>
                            {itemData.into.map((item) => (
                                <div className={styles.nameBlock} key={item} onClick={(e) => { setStateId(item) }}>
                                    <Image alt={item} width={50} height={50} src={'http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/' + item + '.png'} />
                                    <div>
                                        <div>{data && data.data[item].name}</div>
                                        <div><span className={styles.label}>Стоимость</span> {data && data.data[item].gold.total}({data.data[item].gold.base})</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                }
            </div>}
        </div>
    )
}

export default ItemDesc