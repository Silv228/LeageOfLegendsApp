'use client'
import React, { MouseEvent, ReactNode, memo, useState } from 'react'
import Image from 'next/image'
import styles from './ChampCard.module.css'
import { ChampCardProps } from './ChampCard.props'
import Link from 'next/link'

const ChampCard = memo(({ name, img, info, id }: ChampCardProps) => {
    const [hint, setHint] = useState<string>('')
    const [cursorPos, setCursorPos] = useState<number>(0)

    const convertToIcons = (key: string, value: number): Array<ReactNode> => {
        return (
            new Array(5).fill(<Image priority={false} loading="lazy" height={24} width={24} alt='empty-def' src={'/info/' + key + '/empty.svg'} />).
                fill(<Image priority={false} loading="lazy" height={24} width={24} alt='full-def' src={'/info/' + key + '/full.svg'} />, 0, Math.floor(value / 2)).
                fill((Math.floor(value / 2) !== value / 2) ? <Image priority={false} loading="lazy" height={24} width={24} alt='half-def' src={'/info/' + key + '/half.svg'} /> : <Image height={24} width={24} alt='empty-def' src={'/info/' + key + '/empty.svg'} />, Math.floor(value / 2), (Math.floor(value / 2) + 1))
        )
    }
    const showHint = (hintName: string, y: number) => {
        setHint(hintName)
        setCursorPos(y)
    }

    return (
        <Link href={`Champions/${id}`} className={styles.card}>
            <Image loading="lazy" className={styles.img} alt={img} width={120} height={120} src={'http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/' + img} />
            <div className={styles.name}>{name}</div>
            <div className={styles.info} onMouseLeave={(e: MouseEvent) => { setHint('') }} onClick={e => e.preventDefault()}>
                <div className={styles.stats} onMouseOver={(e: MouseEvent) => showHint('Физический урон', e.pageY)} >
                    {convertToIcons("attack", info.attack)}
                </div>
                <div className={styles.stats} onMouseOver={(e: MouseEvent) => showHint('Защита', e.pageY)} >
                    {convertToIcons("defense", info.defense)}
                </div>
                <div className={styles.stats} onMouseOver={(e: MouseEvent) => showHint('Урон способностями', e.pageY)}>
                    {convertToIcons("magic", info.magic)}
                </div>
                <div className={styles.stats} onMouseOver={(e: MouseEvent) => showHint('Сложность', e.pageY)} >
                    {convertToIcons("difficulty", info.difficulty)}
                </div>
                {hint && <span style={{ top: `${cursorPos - 20}px` }} className={styles.hint}>{hint}</span>}
            </div>
        </Link>
    )
})
export default ChampCard