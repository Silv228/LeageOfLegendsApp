import React from "react";
import ChampDesc from "../../Components/ChampDesc/ChampDesc";
import styles from "./page.module.css"
import ChampSpells from "../../Components/ChampionSpells/ChampSpells";
import ChampSkins from "../../Components/ChampSkins/ChampSkins";
import { IResponse } from "@/interfaces/championsFull.interface";
import { api } from "@/app/myApi/api";
import { Metadata } from "next";
import { IChampion } from "@/interfaces/champion.interface";

export async function generateStaticParams() {
    const champs: IResponse = await fetch('http://ddragon.leagueoflegends.com/cdn/13.14.1/data/ru_RU/champion.json').then((res) => res.json())
    return (Object.keys(champs.data).map((cham) => ({
        champion: cham,
    })))
}
async function translate(word: string) {
    const data = await fetch('http://ddragon.leagueoflegends.com/cdn/13.14.1/data/ru_RU/language.json', {
        method: "GET"
    })
    const res = await data.json()
    return (res.data[word] + ' ')
}
export async function generateMetadata({ params }: { params: { champion: string } }): Promise<Metadata> {
    const champ: IChampion = await api.getChampionData(params.champion)
    return {
        title: params.champion,
        description: champ.data[params.champion].lore
    }
}

const ChampionPage = async ({ params }: { params: { champion: string } }) => {
    const champ = await api.getChampionData(params.champion)
    const tags = champ.data[params.champion].tags.map((tag: string) => translate(tag))

    return (
        <div className={styles.wrapper} style={{ backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champ.data[params.champion].id + '_0.jpg)' }}>
            <ChampDesc className={styles.description} tags={tags} champData={champ.data[params.champion]} champion={params.champion} />
            <ChampSpells className={styles.spells} ChampKey={champ.data[params.champion].key} partype={champ.data[params.champion].partype} spells={champ.data[params.champion].spells} passive={champ.data[params.champion].passive} />
            <ChampSkins className={styles.skins} champion={params.champion} skins={champ.data[params.champion].skins} />
        </div>

    )
}
export default ChampionPage