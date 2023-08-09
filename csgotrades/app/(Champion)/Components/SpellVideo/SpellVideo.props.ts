import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface SpellVideoProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    button: string
    ChampKey: string
}