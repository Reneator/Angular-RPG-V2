import {CharacterSkillsContainer} from '../skills/character-skills-container';
import {EventEmitter} from '@angular/core';
import {EventCharacterDeath} from '../event/event-character-death';
import {LootTable} from './loot-table';

export abstract class Character {
  public static onDeath = new EventEmitter<EventCharacterDeath>();

  name: string;
  hp: number;
  damage: number;
  alive;
  lootTable: LootTable;


  skills: CharacterSkillsContainer = new CharacterSkillsContainer();


  damageCharacter(dmgOrigin: Character): void {
    if (!this.alive) {
      return;
    }
    if (this.hp - dmgOrigin.damage <= 0) {
      this.hp = 0;
      this.die();
      Character.onDeath.emit(new EventCharacterDeath(dmgOrigin, this));
    } else {
      this.hp = this.hp - dmgOrigin.damage;
    }
  }

  die(): void {
    this.alive = false;
  }


}
