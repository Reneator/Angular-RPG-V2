import {Component, OnInit} from '@angular/core';
import {Monster} from '../../classes/characters/monster';
import {PlayerWindow} from '../playerwindows';
import {Skill} from '../../classes/skills/skill';
import {Character} from '../../classes/characters/character';
import {EventCharacterDeath} from '../../classes/event/event-character-death';
import {Calculator} from '../../classes/calculators/calculator';
import {EventCharacterDamaged} from '../../classes/event/event-character-damaged';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent extends PlayerWindow implements OnInit {

  enemies: Monster[];

  private _deathSubscription;
  private _damagedSubscription;


  constructor() {
    super();
    this._deathSubscription = Character.onDeath.subscribe({
      next: (event: EventCharacterDeath) => {
        if (event.victim instanceof Monster) {
          this.hero.reward(event.victim);
        }
        console.log(`Somebody died Killer ${event.cause.name}: Victim ${event.victim.name}`);
      }
    });

    this._damagedSubscription = Character.onDeath.subscribe({
      next: (event: EventCharacterDamaged) => {
        // if (event.victim instanceof Monster) {
        //   this.hero.reward(event.victim);
        // }
        console.log(`Sombody got hurt: Victim:${event.victim.name} Cause:${event.cause.name}`);
      }
    });
  }

  ngOnInit() {
  }


  useSkill(skill: Skill, target: Character) {
    skill.use(this.hero, target);
  }

  attackEnemy(enemy) {
    Calculator.attackCharacter(this.hero, enemy);
    //
    // if (!enemy.alive) {
    //   return;
    // }
    // enemy.damageCharacter(this.hero);
    // this.hero.damageCharacter(enemy);
    // this.hero.heroLevel.gainExp(355);
  }


  nextEnemy() {
    this.enemies = [];
    this.enemies.push(new Monster(200));
    this.enemies.push(new Monster(100));
  }
}
