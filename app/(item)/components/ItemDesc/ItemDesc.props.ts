import { ItemStat } from "@/interfaces/items.interface"
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react"

export interface ItemDescProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data?: ItemStat
    setInfoOpen: (isOpen: boolean) => void
    setId: (id: string) => void
    itemsObj: Record<string, ItemStat>
}