'use client'
import React from "react"
import { ChampSpellsProps } from "./ChampSpells.props"
import { Spell } from "@/interfaces/champion.interface"
import Image from "next/image"
import styles from "./ChampSpells.module.css"

const ChampSpells = ({ spells, partype, passive, ...props }: ChampSpellsProps) => {
    const buttons = ['Q', 'W', 'E', 'R']
    const spellsArray = spells.map((spell: Spell, i: number) => (
        <div className={styles.spell} key={spell.id}>
            <div className={styles.spellName}>{spell.name} <span className={styles.additionalyInfo}>{buttons[i]}</span></div>
            <div className={styles.shortInfo}>
                <Image className={styles.sellIcon} width={60} height={60} alt={spell.id} src={'http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/' + spell.image.full} />
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
            <div className={styles.spell}>
                <div className={styles.spellName}>{passive.name} <span className={styles.additionalyInfo}>Пассивное умение</span></div>
                <div className={styles.shortInfo}>
                    <Image className={styles.sellIcon} width={60} height={60} alt={passive.image.full} src={'http://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/' + passive.image.full} />
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: '<div>' + passive.description + '</div>' }} />
                </div>
            </div>
            {spellsArray}
        </div>
    )
}

export default ChampSpells