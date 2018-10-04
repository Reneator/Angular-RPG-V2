import {Character} from './character';
import {LootTable} from './loot-table';

export class Monster extends Character {
  gold: number;
  monsterType: string;
  type: string;
  description: string;
  experience: number;


  constructor(hp: number) {
    super();
    this.hp = hp;
    this.name = 'monster';
    this.alive = true;
    this.lootTable = new LootTable(5000, 9999);
  }

  damageCharacter(other: Character): void {
    super.damageCharacter(other);
    // this.rewardPlayer
  }

  onDeath() {

  }

  clone(): Monster {
    // return new Monster(this.name, this.hp, this.damage, this.alive, this.gold,
    //   this.monsterType, this.type, this.description, this.experience);
    return null;
  }
}
