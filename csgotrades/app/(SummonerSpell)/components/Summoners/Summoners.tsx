'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SpellDesc from "../SpellDesc/SpellDesc";
import styles from './Summoners.module.css'
import { SummonerProps } from "./Summoners.props";

const Summoners = ({ spellsArray, ...props }: SummonerProps) => {
    const [spellId, setSpellId] = useState<string>('SummonerBarrier')
    const spell = spellsArray.find((spell) => spell.id === spellId)
    const summonersArray = spellsArray.map(spell => {
        if (spell.modes.includes('CLASSIC') || spell.modes.includes('ARAM')) return (
            <div className={styles.spell} onClick={() => setSpellId(spell.id)} key={spell.key}>
                <Image alt={spell.id} width={50} height={50} src={'http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/' + spell.image.full} />
                <div>{spell.name}</div>
            </div>)
    })
    return (
        <div {...props}>
            <div className={styles.summoners}>
                {summonersArray}
            </div>
            <div className={styles.description}>
                <SpellDesc name={spell?.name ?? ''} summonerLevel={spell?.summonerLevel ?? 0} description={spell?.description ?? ''} cooldownBurn={spell?.cooldownBurn ?? ''} rangeBurn={spell?.rangeBurn ?? ''} spellId={spellId} />
            </div>
        </div>
    )
}

export default Summoners