import {Injectable} from '@angular/core';

import {LEVEL_STEPPINGS} from '../mockdata/mock-level-steppings';
import {HeroLevel} from '../classes/characters/herolevel';

@Injectable()
export class HeroLevelService {

  generateHeroLevel(): HeroLevel {
    return new HeroLevel(1, 0, LEVEL_STEPPINGS);
  }


}
