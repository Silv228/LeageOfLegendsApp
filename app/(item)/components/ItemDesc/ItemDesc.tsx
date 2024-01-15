'use client'
import Image from "next/image";
import React from "react";
import styles from "./ItemDesc.module.css"
import { ItemDescProps } from "./ItemDesc.props";

const ItemDesc = ({ data, setId, setInfoOpen, itemsObj, ...props }: ItemDescProps) => {
    return (
        <div {...props}>
            {data && <div className={styles.infoFull} {...props}>
                <div className={styles.headInfo} onClick={(e) => setInfoOpen(false)}>
                    <div className={styles.nameBlock}>
                        <Image alt={data?.image.full ?? 'item'} width={50} height={50} src={'http://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/' + data?.image.full} />
                        <div>
                            <div className={styles.name}>{data?.name}</div>
                            <div className={styles.plaintext}>{data?.plaintext}</div>
                        </div>
                    </div>
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: data?.description ?? <></> }} />
                    <div className={styles.price}><span className={styles.label}>Стоимость</span> {data?.gold.total}({data?.gold.base})</div>
                </div>
                {data.into &&
                    <>
                        <div className={styles.majorLabel}>В сборках</div>
                        <div className={styles.into}>
                            {data.into.map((item) => (
                                <div className={styles.nameBlock} key={item} onClick={(e) => { setId(item) }}>
                                    <Image alt={item} width={50} height={50} src={'http://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/' + item + '.png'} />
                                    <div>
                                        <div>{itemsObj[item].name}</div>
                                        <div><span className={styles.label}>Стоимость</span> {itemsObj[item].gold.total}({itemsObj[item].gold.base})</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                }
                {data.from &&
                    <>
                        <div className={styles.majorLabel}>Рецепт</div>
                        <div className={styles.from}>
                            {data.from.map((item) => (
                                <div className={styles.nameBlock} key={item} onClick={(e) => { setId(item) }}>
                                    <Image alt={item} width={50} height={50} src={'http://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/' + item + '.png'} />
                                    <div>
                                        <div>{itemsObj[item].name}</div>
                                        <div><span className={styles.label}>Стоимость</span> {itemsObj[item].gold.total}({itemsObj[item].gold.base})</div>
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