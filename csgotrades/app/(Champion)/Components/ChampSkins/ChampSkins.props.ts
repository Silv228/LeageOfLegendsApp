import { Skin } from "@/interfaces/champion.interface";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface ChampSkinsProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    skins: Skin[],
    champion: string
}