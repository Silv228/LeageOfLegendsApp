import { IData } from "@/interfaces/summoners.interface";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface SummonerProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    spellsArray: IData[]
}