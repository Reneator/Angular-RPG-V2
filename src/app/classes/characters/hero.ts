import {Character} from './character';
import {HeroLevel} from './herolevel';
import {HeroClass} from './hero-class';
import {EventEmitter, Output} from '@angular/core';
import {EventCharacterDeath} from '../event/event-character-death';

export class Hero extends Character {
  gold: number;
  heroLevel: HeroLevel;
  mana: number;
  heroClass: HeroClass;

private _deathSubscription;


  constructor(damage: number) {
    super();
    this.damage = damage;
    this._deathSubscription = Character.onDeath.subscribe({
      next: (event: EventCharacterDeath) => {
        console.log(`Somebody died #Killer${event.cause}: Victim ${event.victim}`);
      }
    });
  }

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
