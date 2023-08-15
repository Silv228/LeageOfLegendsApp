import { Champ } from "@/interfaces/champion.interface"
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react"

export interface ChampDescProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    champion: string
    champData: Champ
    tags: Promise<string>[]
}