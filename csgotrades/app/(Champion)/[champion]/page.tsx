import { IChampion } from "@/interfaces/champion.interface";
import React from "react";
import ChampDesc from "../Components/ChampDesc/ChampDesc";

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
        <>
            <ChampDesc tags={tags} champData={champ.data[params.champion]} champion={params.champion} />
            {/* <>description</> 8/10
            <>spells</>
            <>builds</>
            <>scins</> */}
        </>

    )
}
export default ChampionPage