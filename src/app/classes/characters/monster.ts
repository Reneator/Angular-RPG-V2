import {Character} from './character';

export class Monster extends Character {
  gold: number;
  monsterType: string;
  type: string;
  description: string;
  experience: number;

  constructor(name: string, hp: number, damage: number, alive: boolean, gold: number, monsterType: string,
              type: string, description: string, experience: number) {
    super(name, hp, damage, alive);
    this.name = name;
    this.gold = gold;
    this.monsterType = monsterType;
    this.type = type;
    this.description = description;
    this.experience = experience;

  }


  damageCharacter(other: Character): void {
    super.damageCharacter(other);
  }

  clone(): Monster {
    return new Monster(this.name, this.hp, this.damage, this.alive, this.gold,
      this.monsterType, this.type, this.description, this.experience);
  }

}
