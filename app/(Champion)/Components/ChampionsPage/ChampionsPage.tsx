'use client'
import ChampCard from "@/app/components/ChampCard/ChampCard";
import Search from "@/app/components/Search/Search";
import { IChampionShort } from "@/interfaces/championsFull.interface";
import React, { useState } from "react";
import { ChampionsPageProps } from "./ChampionsPage.props";
import styles from "./ChampionsPage.module.css"

const ChampionsPage = ({ champArray }: ChampionsPageProps) => {
    const [champs, setChamps] = useState<IChampionShort[]>(champArray)
    const champGrid = champs.map((champ) => <ChampCard id={champ.id} info={champ.info} key={champ.key} img={champ.image.full} name={champ.name} />)
    return (
        <div>
            <Search data={champArray} setFindEl={setChamps} />
            <div className={styles.grid}>
                {champGrid}
            </div>
        </div>
    )
}

export default ChampionsPage