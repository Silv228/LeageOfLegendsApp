import { IChampionShort } from "@/interfaces/championsFull.interface";

export interface ChampionsPageProps {
    champArray: IChampionShort[]
    initChampArray: IChampionShort[]
    setChampArr: (array: IChampionShort[]) => void
}