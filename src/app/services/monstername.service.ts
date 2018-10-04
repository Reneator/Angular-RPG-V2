import {Injectable} from '@angular/core';

import {MONSTER_NAMES} from '../mockdata/mock-monsternames';

@Injectable()
export class MonsterNameService {

  getRandomMonsterName(): string {
    return MONSTER_NAMES[this.getRandomNumber()];
  }

  public getRandomNumber(): number {
    const index = Math.floor(Math.random() * MONSTER_NAMES.length);
    return index;
  }
}
