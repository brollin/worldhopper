export type InvestitureName =
  | "Allomancy"
  | "Feruchemy"
  | "Hemalurgy"
  | "Surgebinding"
  | "Old Magic"
  | "Voidbinding"
  | "AonDor"
  | "ChayShan"
  | "Dakhor"
  | "Forgery"
  | "Bloodsealing"
  | "BioChromatic Breath"
  | "Sand Mastery";

export class Investiture {
  id: string;
  name: InvestitureName;
  description: string;

  constructor(investiture: Investiture) {
    this.id = investiture.id;
    this.name = investiture.name;
    this.description = investiture.description;
  }
}
