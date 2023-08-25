'use client'
import Image from "next/image";
import React, { useRef, useState } from "react";
import SpellDesc from "../SpellDesc/SpellDesc";
import styles from './SummonersPage.module.css'
import { SummonerProps } from "./SummonersPage.props";
import Card from "@/app/components/Card/Card";

const SummonersPage = ({ spellsArray, ...props }: SummonerProps) => {
    const [spellId, setSpellId] = useState<string>('SummonerBarrier')
    const spell = spellsArray.find((spell) => spell.id === spellId)
    const descRef = useRef<HTMLDivElement>(null)
    const handlePickSummoner = (id: string) => {
        setSpellId(id)
        descRef.current?.scrollIntoView({ block: "end", behavior: "smooth" })
    }
    const summonersArray = spellsArray.map(spell => {
        if (spell.modes.includes('CLASSIC') || spell.modes.includes('ARAM')) return (
            <div className={styles.spell} onClick={() => handlePickSummoner(spell.id)} key={spell.key}>
                <Image alt={spell.id} width={50} height={50} src={'http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/' + spell.image.full} />
                <div>{spell.name}</div>
            </div>)
    })
    return (
        <div {...props}>
            <Card className={styles.summoners}>
                {summonersArray}
            </Card>
            <div ref={descRef} className={styles.description}>
                <SpellDesc name={spell?.name ?? ''} summonerLevel={spell?.summonerLevel ?? 0} description={spell?.description ?? ''} cooldownBurn={spell?.cooldownBurn ?? ''} rangeBurn={spell?.rangeBurn ?? ''} spellId={spellId} />
            </div>
        </div>
    )
}

export default SummonersPage