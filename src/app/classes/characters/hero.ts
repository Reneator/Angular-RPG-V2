import {Character} from './character';
import {HeroLevel} from './herolevel';
import {HeroClass} from './hero-class';

export class Hero extends Character {
  gold: number;
  heroLevel: HeroLevel;
  mana: number;
  heroClass: HeroClass;

  // energy: Energy;
  // inventory: Inventory;
  // attributes: Attributes;
  // skills: Skills;
  // stats: Stats

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
