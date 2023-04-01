import { Investiture } from "@/modules/cosmere/models/Investiture";
import { ShardWorld } from "@/modules/cosmere/models/ShardWorld";

export const shardWorlds: ShardWorld[] = [
  {
    id: "scadrial",
    name: "Scadrial",
    series: "Mistborn",
    shards: ["Preservation", "Ruin"],
    perpendicularities: ["Well of Ascension"],
    investitures: ["Allomancy", "Feruchemy", "Hemalurgy"],
    system: "Scadrian system",
    moons: ["Luthadel"],
  },
  {
    id: "roshar",
    name: "Roshar",
    series: "The Stormlight Archive",
    shards: ["Honor", "Cultivation", "Odium"],
    perpendicularities: ["The Oathgate system", "The Horneater Peaks"],
    investitures: ["Surgebinding", "Old Magic", "Voidbinding"],
    system: "Rosharan system",
    moons: ["Salas", "Nomon", "Mishim"],
  },
  {
    id: "sel",
    name: "Sel",
    series: "Elantris",
    shards: ["Devotion", "Dominion"],
    perpendicularities: ["The Pool"],
    investitures: ["AonDor", "ChayShan", "Dakhor", "Forgery", "Bloodsealing"],
    system: "Selish system",
    moons: ["None"],
  },
  {
    id: "nalthis",
    name: "Nalthis",
    series: "Warbreaker",
    shards: ["Endowment"],
    perpendicularities: ["The Court of Gods"],
    investitures: ["BioChromatic Breath"],
    system: "Nalthian system",
    moons: ["None"],
  },
  {
    id: "taldain",
    name: "Taldain",
    series: "White Sand",
    shards: ["Autonomy"],
    perpendicularities: ["The Dayside"],
    investitures: ["Sand Mastery"],
    system: "Taldain system",
    moons: ["None"],
  },
  // {
  //   id: "firstOfTheSun",
  //   name: "First of the Sun",
  //   series: "Sixth of the Dusk",
  //   shards: ["None"],
  //   perpendicularities: ["Unknown"],
  //   investitures: ["Aviar abilities"],
  //   system: "Unknown",
  //   moons: ["None"],
  // },
  // {
  //   id: "threnody",
  //   name: "Threnody",
  //   series: "Shadows for Silence in the Forests of Hell",
  //   shards: ["Ambition"],
  //   perpendicularities: ["Unknown"],
  //   investitures: ["Unknown"],
  //   system: "Unknown",
  //   moons: ["None"],
  // },
  // {
  //   id: "yolen",
  //   name: "Yolen",
  //   series: "Various Cosmere works",
  //   shards: ["Unknown"],
  //   perpendicularities: ["Unknown"],
  //   investitures: ["Unknown"],
  //   system: "Unknown",
  //   moons: ["Unknown"],
  // },
];

export const shardWorldById: Record<string, ShardWorld> = shardWorlds.reduce(
  (acc, shardWorld) => {
    acc[shardWorld.id] = shardWorld;
    return acc;
  },
  {} as Record<string, ShardWorld>,
);

export const investitures: Investiture[] = [
  {
    id: "allomancy",
    name: "Allomancy",
    description: "The ability to burn metals to gain superhuman abilities.",
  },
  {
    id: "feruchemy",
    name: "Feruchemy",
    description:
      "The ability to store and use investiture to enhance the body.",
  },
  {
    id: "hemalurgy",
    name: "Hemalurgy",
    description:
      "The ability to steal investiture from others and use it for yourself.",
  },
  {
    id: "surgebinding",
    name: "Surgebinding",
    description:
      "The ability to use investiture to enhance the body and manipulate the environment.",
  },
  {
    id: "oldMagic",

    name: "Old Magic",
    description: "",
  },
  {
    id: "voidbinding",
    name: "Voidbinding",
    description:
      "The ability to use investiture to enhance the body and manipulate the environment.",
  },
  {
    id: "aondor",
    name: "AonDor",
    description: "",
  },
  {
    id: "chayshan",
    name: "ChayShan",
    description: "",
  },
  {
    id: "dakhor",
    name: "Dakhor",
    description: "",
  },
  {
    id: "forgery",
    name: "Forgery",
    description: "",
  },
  {
    id: "bloodsealing",
    name: "Bloodsealing",
    description: "",
  },
  {
    id: "biochromaticBreath",
    name: "BioChromatic Breath",
    description: "",
  },
  {
    id: "sandMastery",
    name: "Sand Mastery",
    description: "",
  },
];
