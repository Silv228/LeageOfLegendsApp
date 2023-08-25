'use client'
import React from "react";
import styles from './SpellDesc.module.css'
import { SpellDescProps } from "./SpellDesc.props";
import SpellVideo from "@/app/components/SpellVideo/SpellVideo";
import Card from "@/app/components/Card/Card";

const SpellDesc = ({ name, spellId, summonerLevel, description, cooldownBurn, rangeBurn }: SpellDescProps) => {
    return (
        <div className={styles.temp}>
            <Card className={styles.info}>
                <div className={styles.nameBlock}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.lvl}>Минимальный уровень {summonerLevel}</div>
                </div>
                <div className={styles.description}>{description}</div>
                <div>
                    <div>Перезарядка <b>{cooldownBurn}</b></div>
                    <div>Дальность <b>{rangeBurn}</b></div>
                </div>
            </Card>
            <div className={styles.video}>
                <SpellVideo  url={'mediaSummoners/' + spellId + '.webm'} />
            </div>
        </div>
    )
}

export default SpellDesc