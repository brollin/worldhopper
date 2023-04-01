export type ShardWorldName =
  | "Scadrial"
  | "Roshar"
  | "Sel"
  | "Nalthis"
  | "Taldain";

export class ShardWorld {
  id: string;
  name: ShardWorldName;
  series: string;
  shards: string[];
  perpendicularities: string[];
  investitures: string[];
  system: string;
  moons: string[];

  constructor(shardWorld: ShardWorld) {
    this.id = shardWorld.id;
    this.name = shardWorld.name;
    this.series = shardWorld.series;
    this.shards = shardWorld.shards;
    this.perpendicularities = shardWorld.perpendicularities;
    this.investitures = shardWorld.investitures;
    this.system = shardWorld.system;
    this.moons = shardWorld.moons;
  }
}
