import { Champ } from "@/interfaces/champion.interface"

export interface ChampDescProps {
    champion: string
    champData: Champ
    tags: Promise<string>[]
}