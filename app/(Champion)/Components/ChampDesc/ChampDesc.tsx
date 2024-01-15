'use client'
import React, { MouseEvent, useState } from "react"
import Image from "next/image"
import styles from "./ChampDesc.module.css"
import { ChampDescProps } from "./ChampDesc.props"

const ChampDesc = ({ champData, champion, tags, ...props }: ChampDescProps): JSX.Element => {
    const statsNames = ['attackdamage', 'armor', 'spellblock', 'attackspeed', 'crit', 'movespeed', 'hp', 'mp', 'attackrange', 'hpregen', 'mpregen'] //+9
    const [hint, setHint] = useState<string>('')
    const [cursorPos, setCursorPos] = useState<number[]>([0, 0])
    const showHint = (hintName: string, pos: number[]) => {
        setHint(hintName)
        setCursorPos(pos)
    }
    console.log(champData.image)
    return (
        <div className={styles.description} {...props}>
            <div className={styles.headDescription}>
                <div className={styles.firstInfo}>
                    <Image width={120} height={120} alt={champion} src={process.env.NEXT_PUBLIC_DOMAIN + '/img/champion/' + champData.image.full} />
                    <div className={styles.tags}>
                        <div className={styles.name}>{champData.name}</div>
                        <div>{tags}</div>
                    </div>
                </div>
                <div className={styles.stats} onMouseLeave={(e: MouseEvent) => { setHint('') }}>
                    {statsNames.map((stat: string) =>
                        <div key={stat} className={styles.stat} onMouseOver={(e: MouseEvent) => showHint(stat, [e.pageX, e.pageY])} >
                            <Image alt={stat} width={24} height={24} src={'/stats/' + stat + '.svg'} />
                            <div className={styles.statValue}>{champData.stats[stat]}</div>
                        </div>)
                    }
                    {hint && <span style={{ top: `${cursorPos[1] - 20}px`, left: `${cursorPos[0]}px` }} className={styles.hint}>{hint}</span>}
                </div>
            </div>
            <div className={styles.lore}>{champData.lore}</div>

        </div>
    )
}
export default ChampDesc
