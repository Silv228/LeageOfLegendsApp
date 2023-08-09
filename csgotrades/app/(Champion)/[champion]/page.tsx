import { IChampion } from "@/interfaces/champion.interface";
import React from "react";
import ChampDesc from "../Components/ChampDesc/ChampDesc";
import styles from "./page.module.css"
import ChampSpells from "../Components/ChampionSpells/ChampSpells";
import ChampSkins from "../Components/ChampSkins/ChampSkins";

const getChampionData = async (params: { champion: string }): Promise<IChampion> => {
    const data = await fetch('http://ddragon.leagueoflegends.com/cdn/13.14.1/data/ru_RU/champion/' + params.champion + '.json', {
        method: "GET"
    })
    return data.json()
}
export async function translate(word: string): Promise<string> {
    const data = await fetch('http://ddragon.leagueoflegends.com/cdn/13.14.1/data/ru_RU/language.json', {
        method: "GET"
    });
    const res = await data.json();
    return res.data[word] + ' ';
}
const ChampionPage = async ({ params }: { params: { champion: string } }) => {
    const champ = await getChampionData(params)
    const tags = champ.data[params.champion].tags.map((tag: string) => translate(tag))
    return (
        <div className={styles.wrapper} style={{ backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champ.data[params.champion].id + '_0.jpg)' }}>
            <ChampDesc className={styles.description} tags={tags} champData={champ.data[params.champion]} champion={params.champion} />
            <ChampSpells className={styles.spells} ChampKey={champ.data[params.champion].key} partype={champ.data[params.champion].partype} spells={champ.data[params.champion].spells} passive={champ.data[params.champion].passive}/>
            <ChampSkins className={styles.skins} champion = {params.champion} skins = {champ.data[params.champion].skins}/>
            {/* <>description</> 8/10 (tags and name & stats fo per level)
            <>spells</> 8/10 (gif)
            <>scins</> 8/10 (border) */}
        </div>

    )
}
export default ChampionPage