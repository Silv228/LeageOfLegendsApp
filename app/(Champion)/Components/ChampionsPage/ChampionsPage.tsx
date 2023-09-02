'use client'
import ChampCard from "@/app/components/ChampCard/ChampCard";
import Search from "@/app/components/Search/Search";
import { IChampionShort } from "@/interfaces/championsFull.interface";
import React, { useEffect, useState } from "react";
import { ChampionsPageProps } from "./ChampionsPage.props";
import styles from "./ChampionsPage.module.css"
import Pagination from "@/app/components/Pagination/Pagination";

const ChampionsPage = ({ champArray }: ChampionsPageProps) => {
    const [champs, setChamps] = useState<IChampionShort[]>(champArray)
    const [page, setPage] = useState(1)
    const [typePagination, setTypePagination] = useState<'full' | 'medium' | 'short'>('full')
    const countItem = 10
    const champGrid = champs.slice((page - 1) * countItem, page * countItem).map((champ) => <ChampCard id={champ.id} info={champ.info} key={champ.key} img={champ.image.full} name={champ.name} />)
    useEffect(() => {
        setTypePagination(window.innerWidth < 600 ? "short" : window.innerWidth <= 1080 ? "medium" : "full")
    })
    return (
        <div>
            <Search setPage={setPage} data={champArray} setFindEl={setChamps} />
            <div className={styles.grid}>
                {champGrid}
            </div>
            {(Math.ceil(champs.length / countItem) > 1) && <Pagination setPage={setPage} maxPage={Math.ceil(champs.length / countItem)} page={page} type={typePagination} />}
        </div>
    )
}

export default ChampionsPage