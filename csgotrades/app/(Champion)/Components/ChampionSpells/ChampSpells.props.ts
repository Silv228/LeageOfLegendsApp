import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { Passive, Spell } from './../../../../interfaces/champion.interface';

export interface ChampSpellsProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    spells: Spell[],
    partype: string,
    passive: Passive,
    ChampKey: string
}