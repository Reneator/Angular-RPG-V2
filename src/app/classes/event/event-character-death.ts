import {Character} from '../characters/character';

export class EventCharacterDeath {
  cause: any;
  victim: Character;


  constructor(cause: any, victim: Character) {
    this.cause = cause;
    this.victim = victim;
  }
}
