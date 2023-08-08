import { IGold, ItemStat } from "@/interfaces/items.interface"

export interface ItemsCardProps {
    name: string
    img: string
    info: string
    id: string
    description: string
    into: string[]
    gold: IGold
}