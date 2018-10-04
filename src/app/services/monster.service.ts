import {Injectable} from '@angular/core';

import {MONSTERS} from '../mockdata/mock-monsters';
import {Monster} from '../classes/characters/monster';

@Injectable()
export class MonsterService {
  monsters = MONSTERS;


  getRandomMonster(name: string): Monster {
    return this.getMonster(name, this.getRandomNumber());

  }

  getMonster(name: string, index: number): Monster {
    const monster = MONSTERS[index];
    monster.name = name;
    return monster.clone();
  }

  public getRandomNumber(): number {
    const index = Math.floor(Math.random() * MONSTERS.length);
    return index;
  }


}
