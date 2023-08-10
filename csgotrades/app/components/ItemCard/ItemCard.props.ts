import { IGold } from "@/interfaces/items.interface"
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react"

export interface ItemsCardProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string
    img: string
    info: string
    id: string
    description: string
    into: string[]
    gold: IGold
}