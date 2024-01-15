import { notFound } from 'next/navigation';
import { IRunes } from '@/interfaces/runes.interface';

export const api = {
    async getChampions() {
        const data = await fetch('http://ddragon.leagueoflegends.com/cdn/14.1.1/data/ru_RU/champion.json',
            {
                method: 'GET'
            }
        )
        return data.json()
    },
    async getChampionData(champion: string) {
        const data = await fetch('http://ddragon.leagueoflegends.com/cdn/14.1.1/data/ru_RU/champion/' + champion + '.json', {
            method: "GET"
        })
        if (data.status !== 200) {
            notFound()
        }
        return data.json()
    },
    async getItems() {
        const data = await fetch('http://ddragon.leagueoflegends.com/cdn/14.1.1/data/ru_RU/item.json',
            {

                method: 'GET'
            }
        )

        return data.json()
    },
    async getRunes(): Promise<IRunes[]> {
        const data = await fetch('http://ddragon.leagueoflegends.com/cdn/14.1.1/data/ru_RU/runesReforged.json', {
            method: "GET"
        })
        return data.json()
    },
    async getSummonersSpell() {
        const data = await fetch('http://ddragon.leagueoflegends.com/cdn/14.1.1/data/ru_RU/summoner.json',
            {
                method: 'GET'
            }
        )
        return data.json()
    }
}