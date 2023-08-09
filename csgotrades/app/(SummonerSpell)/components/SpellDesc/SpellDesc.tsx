'use client'
import React from "react";
import styles from './SpellDesc.module.css'
import { SpellDescProps } from "./SpellDesc.props";
import SpellVideo from "@/app/(Champion)/Components/SpellVideo/SpellVideo";

const SpellDesc = ({ name, spellId, summonerLevel, description, cooldownBurn, rangeBurn }: SpellDescProps) => {
    return (
        <div>
            <div className={styles.info}>
                <div className={styles.nameBlock}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.lvl}>min lvl {summonerLevel}</div>
                </div>
                <div className={styles.description}>{description}</div>
                <div>
                    <div>Перезарядка {cooldownBurn}</div>
                    <div>Дальность {rangeBurn}</div>
                </div>
            </div>
            <SpellVideo className={styles.video} url={'mediaSummoners/' + spellId + '.webm'} />
        </div>
    )
}

export default SpellDesc