'use client'
import { IRune, IRunes, ISlot } from "@/interfaces/runes.interface";
import Image from "next/image";
import React, { useState } from "react";
import { RunePageProps } from "./RunePage.props";
import styles from './RunePage.module.css'

const RunePage = ({ runes }: RunePageProps) => {
    const [runesArray, setRunesArray] = useState<ISlot[]>(runes[0].slots)
    const [info, setInfo] = useState<IRune>()
    const [activeRune, setActiveRune] = useState<IRunes>()
    return (
        <div className={styles.page}>
            <div className={styles.runeNav}>
                {runes.map((rune) => (
                    <div className={activeRune?.id === rune.id ? styles.active : ''} onClick={() => { setRunesArray(rune.slots); setInfo(undefined);setActiveRune(rune) }} key={rune.key}>
                        <Image alt={rune.key} width={50} height={50} src={'http://ddragon.leagueoflegends.com/cdn/img/' + rune.icon} />
                        <div>{rune.name}</div>
                    </div>
                ))}
            </div>
            <hr className={styles.divider} />
            <div className={styles.runesWrapper}>
                <div className={styles.runesArea}>
                    <div>{runesArray && runesArray.map((slot: ISlot) => (
                        <div className={styles.runes}>{slot.runes.map((skill: IRune) => (
                            <div className={info?.id === skill.id ? styles.active : ''} onClick={() => setInfo(skill)}>
                                <Image alt={skill.key} width={70} height={70} src={'http://ddragon.leagueoflegends.com/cdn/img/' + skill.icon} />
                            </div>
                        ))}
                        </div>
                    ))}
                    </div>
                </div>
                {info && <div className={styles.info}>
                    <div className={styles.name}>{info.name}</div>
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: info.longDesc }} />
                </div>}
            </div>
        </div>
    )
}

export default RunePage