import {Injectable} from '@angular/core';

import {Hero} from '../classes/characters/hero';
import {HeroClass} from '../classes/characters/hero-class';
import {HeroLevelService} from './herolevel.service';

@Injectable()
export class HeroService {


  constructor(private heroLevelService: HeroLevelService) {
  }


  // generates or resets the hero
  generateHero(hero: Hero, name: string, heroClass: HeroClass) {
    // getStatsForClass(heroClass);
    hero.name = name;
    hero.heroClass = heroClass;
    hero.hp = 500;
    hero.damage = 200;
    hero.gold = 0;
    hero.mana = 0;
    hero.alive = true;
    hero.heroLevel = this.heroLevelService.generateHeroLevel();
  }


}
