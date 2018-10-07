import {Character} from './character';
import {LootTable} from './charactercontainers/loot-table';

export class Monster extends Character {
  monsterType: string;
  type: string;
  description: string;


  constructor(hp: number) {
    super();
    this.hp = hp;
    this.name = 'monster';
    this.damage = 10;
    this.alive = true;
    this.lootTable = new LootTable(5000, 10000);
    this.img = 'assets/m1-100x100.png';
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
    const monster = new Monster(this.hp);
    monster.name = this.name;
    monster.monsterType = this.monsterType;
    return monster;
    // return null;
  }
}
