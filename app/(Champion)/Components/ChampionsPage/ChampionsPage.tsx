'use client'
import ChampCard from "@/app/components/ChampCard/ChampCard";
import Search from "@/app/components/Search/Search";
import { IChampionShort } from "@/interfaces/championsFull.interface";
import React, { useEffect, useState } from "react";
import { ChampionsPageProps } from "./ChampionsPage.props";
import styles from "./ChampionsPage.module.css"
import Pagination from "@/app/components/Pagination/Pagination";
import Sort from "@/app/components/Sort/Sort";
import Header from "@/app/components/Header/Header";

const ChampionsPage = ({ champArray, initChampArray, setChampArr }: ChampionsPageProps) => {
    const [champs, setChamps] = useState<IChampionShort[]>(champArray)
    const [page, setPage] = useState<number>(1)
    const [typePagination, setTypePagination] = useState<'full' | 'medium' | 'short'>('full')
    const countItem = 10
    useEffect(() => {
        setTypePagination(window.innerWidth < 600 ? "short" : window.innerWidth < 1080 ? "medium" : "full")
    }, [page])
    useEffect(() => {
        setChamps(champArray)
    }, [champArray])
    return (
        <>
            <Header>
                <Search setPage={setPage} data={champArray} setFindEl={setChamps} />
                <Sort setData={setChampArr} resetValue={'Все'} sortedData={initChampArray} sortedKeys={['Все', 'Mage', 'Assassin', 'Marksman', 'Tank', 'Support', 'Fighter']} />
            </Header>
            <div className={styles.grid}>
                {champs.slice((page - 1) * countItem, page * countItem).map((champ) => <ChampCard id={champ.id} info={champ.info} key={champ.key} img={champ.image.full} name={champ.name} />)}
            </div>
            {(Math.ceil(champs.length / countItem) > 1) && <Pagination setPage={setPage} maxPage={Math.ceil(champs.length / countItem)} page={page} type={typePagination} />}
        </>
    )
}

export default ChampionsPage