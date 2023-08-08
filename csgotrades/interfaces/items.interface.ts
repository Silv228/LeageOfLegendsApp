export interface IItems {
    type: string;
    version: string;
    basic: IBasic;
    data: Record<string, ItemStat>;
    groups: IGroup[];
    tree: ITree[];
}

interface IBasic {
    name: string;
    rune: IRune;
    gold: IGold;
    group: string;
    description: string;
    colloq: string;
    plaintext: string;
    consumed: boolean;
    stacks: number;
    depth: number;
    consumeOnFull: boolean;
    from: any[];
    into: any[];
    specialRecipe: number;
    inStore: boolean;
    hideFromAll: boolean;
    requiredChampion: string;
    requiredAlly: string;
    stats: IStats;
    tags: any[];
    maps: IMaps;
}

interface IRune {
    isrune: boolean;
    tier: number;
    type: string;
}

export interface IGold {
    base: number;
    total: number;
    sell: number;
    purchasable: boolean;
}

interface IStats {
    FlatHPPoolMod: number;
    rFlatHPModPerLevel: number;
    FlatMPPoolMod: number;
    rFlatMPModPerLevel: number;
    PercentHPPoolMod: number;
    PercentMPPoolMod: number;
    FlatHPRegenMod: number;
    rFlatHPRegenModPerLevel: number;
    PercentHPRegenMod: number;
    FlatMPRegenMod: number;
    rFlatMPRegenModPerLevel: number;
    PercentMPRegenMod: number;
    FlatArmorMod: number;
    rFlatArmorModPerLevel: number;
    PercentArmorMod: number;
    rFlatArmorPenetrationMod: number;
    rFlatArmorPenetrationModPerLevel: number;
    rPercentArmorPenetrationMod: number;
    rPercentArmorPenetrationModPerLevel: number;
    FlatPhysicalDamageMod: number;
    rFlatPhysicalDamageModPerLevel: number;
    PercentPhysicalDamageMod: number;
    FlatMagicDamageMod: number;
    rFlatMagicDamageModPerLevel: number;
    PercentMagicDamageMod: number;
    FlatMovementSpeedMod: number;
    rFlatMovementSpeedModPerLevel: number;
    PercentMovementSpeedMod: number;
    rPercentMovementSpeedModPerLevel: number;
    FlatAttackSpeedMod: number;
    PercentAttackSpeedMod: number;
    rPercentAttackSpeedModPerLevel: number;
    rFlatDodgeMod: number;
    rFlatDodgeModPerLevel: number;
    PercentDodgeMod: number;
    FlatCritChanceMod: number;
    rFlatCritChanceModPerLevel: number;
    PercentCritChanceMod: number;
    FlatCritDamageMod: number;
    rFlatCritDamageModPerLevel: number;
    PercentCritDamageMod: number;
    FlatBlockMod: number;
    PercentBlockMod: number;
    FlatSpellBlockMod: number;
    rFlatSpellBlockModPerLevel: number;
    PercentSpellBlockMod: number;
    FlatEXPBonus: number;
    PercentEXPBonus: number;
    rPercentCooldownMod: number;
    rPercentCooldownModPerLevel: number;
    rFlatTimeDeadMod: number;
    rFlatTimeDeadModPerLevel: number;
    rPercentTimeDeadMod: number;
    rPercentTimeDeadModPerLevel: number;
    rFlatGoldPer10Mod: number;
    rFlatMagicPenetrationMod: number;
    rFlatMagicPenetrationModPerLevel: number;
    rPercentMagicPenetrationMod: number;
    rPercentMagicPenetrationModPerLevel: number;
    FlatEnergyRegenMod: number;
    rFlatEnergyRegenModPerLevel: number;
    FlatEnergyPoolMod: number;
    rFlatEnergyModPerLevel: number;
    PercentLifeStealMod: number;
    PercentSpellVampMod: number;
}

interface IMaps {
    1: boolean;
    8: boolean;
    10: boolean;
    11: boolean;
    12: boolean;
    21: boolean;
    22: boolean;
    30: boolean;
}

export interface IImage {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface ItemStat {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    from?: string[];
    into: string[];
    image: IImage;
    gold: IGold;
    tags: string[];
    maps: IMaps;
    stats: IStats;
    depth?: number;
}

interface IGroup {
    id: string;
    MaxGroupOwnable: string;
}

interface ITree {
    header: string;
    tags: string[];
}
