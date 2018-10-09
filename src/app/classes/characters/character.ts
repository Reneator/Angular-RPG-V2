import {CharacterSkillsContainer} from '../skills/character-skills-container';
import {EventEmitter} from '@angular/core';
import {EventCharacterDeath} from '../event/event-character-death';
import {LootTable} from './charactercontainers/loot-table';
import {CharacterStats} from './charactercontainers/character-stats';
import {CharacterEquipment} from './charactercontainers/character-equipment';
import {CharacterPerks} from './charactercontainers/character-perks';
import {EventCharacterDamaged} from '../event/event-character-damaged';
import {GameObject} from '../game-object';
import {CharacterInventory} from './charactercontainers/character-inventory';

export abstract class Character extends GameObject {
  public static onDeath = new EventEmitter<EventCharacterDeath>();
  public static onDamage = new EventEmitter<EventCharacterDeath>();

  name: string;
  hp: number;
  damage: number;
  alive;
  lootTable: LootTable;
  stats: CharacterStats;
  equipment: CharacterEquipment;
  perks: CharacterPerks;
  inventory: CharacterInventory;


  constructor() {
    super();
  }

  skills: CharacterSkillsContainer = new CharacterSkillsContainer();


  damageCharacter(dmgOrigin: Character): void {
    if (!this.alive) {
      return;
    }
    Character.onDamage.emit(new EventCharacterDamaged(dmgOrigin, this));
    if (this.hp - dmgOrigin.damage <= 0) {
      this.hp = 0;
      this.die();
      Character.onDeath.emit(new EventCharacterDeath(dmgOrigin, this));
    } else {
      this.hp = this.hp - dmgOrigin.damage;
    }
  }

  damageCharacterDirectly(dmgOrigin: Character, dmg: number): void {
    if (!this.alive) {
      return;
    }
    Character.onDamage.emit(new EventCharacterDamaged(dmgOrigin, this));
    if (this.hp - dmg <= 0) {
      this.hp = 0;
      this.die();
      Character.onDeath.emit(new EventCharacterDeath(dmgOrigin, this));
    } else {
      this.hp = this.hp - dmg;
    }
  }

  die(): void {
    this.alive = false;
  }


}
