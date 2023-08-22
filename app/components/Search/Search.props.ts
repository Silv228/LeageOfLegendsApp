import { IChampionShort } from "@/interfaces/championsFull.interface";
import { ItemStat } from "@/interfaces/items.interface";

export interface SearchProps {  
    data: IChampionShort[] | ItemStat[],
    setFindEl: (array) => void
}