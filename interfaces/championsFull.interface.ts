export interface IResponse {
    type: string;
    format: string;
    version: string;
    data: Record<string, IChampionShort>;
}

export interface IChampionShort {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: Info;
    image: Image;
    tags: Tag[];
    partype: string;
    stats: IStats[];
}
export interface IStats {
    hp: number,
    hpperlevel: number,
    mp: number,
    mpperlevel: number,
    movespeed: number,
    armor: number,
    armorperlevel: number,
    spellblock: number,
    spellblockperlevel: number,
    attackrange: number,
    hpregen: number,
    hpregenperlevel: number,
    mpregen: number,
    mpregenperlevel: number,
    crit: number,
    critperlevel: number,
    attackdamage: number,
    attackdamageperlevel: number,
    attackspeedperlevel: number,
    attackspeed: number
}
export interface Image {
    full: string;
    sprite: Sprite;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export enum Sprite {
    Champion0PNG = "champion0.png",
    Champion1PNG = "champion1.png",
    Champion2PNG = "champion2.png",
    Champion3PNG = "champion3.png",
    Champion4PNG = "champion4.png",
    Champion5PNG = "champion5.png",
}

export interface Info {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
}

export enum Tag {
    Assassin = "Assassin",
    Fighter = "Fighter",
    Mage = "Mage",
    Marksman = "Marksman",
    Support = "Support",
    Tank = "Tank",
}