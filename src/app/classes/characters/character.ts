import {CharacterSkillsContainer} from '../skills/character-skills-container';

export class Character {
  name: string;
  hp: number;
  damage: number;
  alive: boolean;

  skills: CharacterSkillsContainer = new CharacterSkillsContainer();


  damageCharacter(other: Character): void {
    if (this.hp - other.damage <= 0) {
      this.hp = 0;
      this.die();
    } else {
      this.hp = this.hp - other.damage;
    }
  }

  die(): void {
    this.alive = false;
  }
}
