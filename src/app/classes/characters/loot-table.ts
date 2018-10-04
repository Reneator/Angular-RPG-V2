export class LootTable {
  expOnDeath: number = 500;
  goldOnDeath: number = 100;
  items;


  constructor(expOnDeath: number, goldOnDeath: number) {
    this.expOnDeath = expOnDeath;
    this.goldOnDeath = goldOnDeath;
  }
}
