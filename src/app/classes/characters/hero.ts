import {Character} from './character';
import {HeroLevel} from './herolevel';
import {HeroClass} from './hero-class';

export class Hero extends Character {
  gold: number;
  heroLevel: HeroLevel;
  mana: number;
  heroClass: HeroClass;


// constructor(damage: number) {
  //   super();
  //   this.damage = damage;
  //   this.hp = 100;
  //
  // }

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

  reward(character: Character) {
    if (character.lootTable != null) {
      this.gainExp(character.lootTable.expOnDeath);
      this.gainGold(character.lootTable.goldOnDeath);
    }

  }

}
