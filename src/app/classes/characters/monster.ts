import {Character} from './character';

export class Monster extends Character {
  gold: number;
  monsterType: string;
  type: string;
  description: string;
  experience: number;


  damageCharacter(other: Character): void {
    super.damageCharacter(other);
    // this.rewardPlayer
  }

  onDeath(){

  }
}
