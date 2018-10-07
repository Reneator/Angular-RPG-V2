import {Injectable} from '@angular/core';

import {Hero} from '../classes/characters/hero';
import {HeroClass} from '../classes/characters/hero-class';
import {HeroLevelService} from './herolevel.service';
import {CharacterInventory} from '../classes/characters/charactercontainers/character-inventory';
import {EQUIPMENT_LIST} from '../mockdata/mock-equipment';
import {CharacterEquipment} from '../classes/characters/charactercontainers/character-equipment';
import {EquipmentSlotType} from '../classes/items/equipment/equipment-slot.enum';
import {EquipmentSlot} from '../classes/items/equipment/equipment-slot';

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
    hero.img = 'assets/hero1.png';
    hero.alive = true;
    hero.heroLevel = this.heroLevelService.generateHeroLevel();
    hero.inventory = new CharacterInventory(20);
    hero.inventory.addItem(EQUIPMENT_LIST[0]);
    hero.equipment = new CharacterEquipment();
    const slot = new EquipmentSlot(EquipmentSlotType.WEAPON);
    slot.exchange(EQUIPMENT_LIST[0]);
    hero.equipment.addEquipmentSlot(slot);
    const slot3 = new EquipmentSlot(EquipmentSlotType.WEAPON);
    slot3.exchange(EQUIPMENT_LIST[1]);
    hero.equipment.addEquipmentSlot(slot3);
    const slot2 = new EquipmentSlot(EquipmentSlotType.SHOULDER);
    hero.equipment.addEquipmentSlot(slot2);



  }


}
