import { IChampionShort } from "@/interfaces/championsFull.interface";
import { ItemStat } from "@/interfaces/items.interface";

interface IState {
    data: IChampionShort[] | ItemStat[]
    showData: IChampionShort[] | ItemStat[]
}

export const searchReducer = (state: IState, action: { word: string }) => {
    let tempState: IChampionShort[] | ItemStat[] = []
    state.data.forEach((element) => {
        if (element.name.toLowerCase().includes(action.word)) {
            tempState.push(element)
        }
    });
    return ({
        ...state,
        showData: tempState
    })
}