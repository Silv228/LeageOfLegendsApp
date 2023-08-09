'use client'
import React, { useState } from "react"
import { ChampSpellsProps } from "./ChampSpells.props"
import { Spell } from "@/interfaces/champion.interface"
import Image from "next/image"
import styles from "./ChampSpells.module.css"

const ChampSpells = ({ ChampKey, spells, partype, passive, ...props }: ChampSpellsProps) => {
    const buttons = ['Q', 'W', 'E', 'R']
    const [button, setButton] = useState<string>('')
    const toRightKey = (key: string): string => {
        let template = '0000'
        return template.slice(key.length - 1, 3).concat(key)
    }
    const spellsArray = spells.map((spell: Spell, i: number) => (
        <div className={styles.spell} key={spell.id}>
            <div className={styles.spellName}>{spell.name} <span className={styles.additionalyInfo}>{buttons[i]}</span></div>
            <div className={styles.shortInfo}>
                <Image onClick={() => setButton(buttons[i])} className={styles.sellIcon} width={60} height={60} alt={spell.id} src={'http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/' + spell.image.full} />
                <div className={styles.costInfo}>
                    <div>Перезарядка <span className={styles.burnValues}>{spell.cooldownBurn}</span></div>
                    <div>{partype} <span className={styles.burnValues}>{spell.costBurn}</span></div>
                    <div>Дальность <span className={styles.burnValues}>{spell.rangeBurn}</span></div>
                </div>
            </div>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: '<div>' + spell.description + '</div>' }} />
        </div>
    ))
    return (
        <div {...props}>
            <div >
                <div className={styles.spell}>
                    <div className={styles.spellName}>{passive.name} <span className={styles.additionalyInfo}>Пассивное умение</span></div>
                    <div className={styles.shortInfo}>
                        <Image className={styles.sellIcon} width={60} height={60} alt={passive.image.full} src={'http://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/' + passive.image.full} />
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: '<div>' + passive.description + '</div>' }} />
                    </div>
                </div>
                {spellsArray}
            </div>
            {button && <div onClick={() => setButton('')} className={styles.videoSpell}>
                <video style={{width: '60%'}} src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${toRightKey(ChampKey)}/ability_${toRightKey(ChampKey)}_${button}1.webm`} controls />
            </div>}
        </div>

    )
}

export default ChampSpells