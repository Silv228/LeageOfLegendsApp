import { IChampionShort } from "@/interfaces/championsFull.interface";
import { ItemStat } from "@/interfaces/items.interface";

// interface Data extends IChampionShort, ItemStat{}

export interface SearchProps {  
    data: any[],
    setFindEl: (array) => void
    setPage?: (page: number) => void
}