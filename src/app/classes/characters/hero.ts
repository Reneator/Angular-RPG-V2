import {Character} from './character';
import {HeroLevel} from './herolevel';

export class Hero extends Character {
  gold: number;
  heroLevel: HeroLevel;
  mana: number;

  // energy: Energy;
  // inventory: Inventory;
  // attributes: Attributes;
  // skills: Skills;
  // stats: Stats

  constructor(name: string, hp: number, damage: number, alive: boolean, goldInventory: number) {
    super(name, hp, damage, alive);
    this.gold = goldInventory;
  }

  setHeroLevel(herolevel: HeroLevel) {
    this.heroLevel = herolevel;
  }


  damageCharacter(other: Character): void {
    super.damageCharacter(other);
  }

  gainExp(exp: number): void {
    this.heroLevel.gainExp(exp);
  }

  gainGold(gold: number): void {
    this.gold += gold;
  }

}
