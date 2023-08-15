export interface ISummoner {
  type: string;
  version: string;
  data: Record<string, IData>;
}

export interface IData {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: IDatavalues;
  effect: any[];
  effectBurn: any[];
  vars: any[];
  key: string;
  summonerLevel: number;
  modes: string[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: IImage;
  resource: string;
}

interface IDatavalues {
}

interface IImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

