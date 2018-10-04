import {Component, Input, OnInit} from '@angular/core';
import {Monster} from '../../classes/characters/monster';
import {PlayerWindow} from '../playerwindows';
import {Skill} from '../../classes/skills/skill';
import {Character} from '../../classes/characters/character';
import {EventCharacterDeath} from '../../classes/event/event-character-death';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent extends PlayerWindow implements OnInit {
  @Input() enemy: Monster;

  private _deathSubscription;


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
  }

  ngOnInit() {
  }


  useSkill(skill: Skill) {
    skill.use(this.hero, this.enemy);
  }

  attackEnemy() {
    this.enemy.damageCharacter(this.hero);
    // this.hero.heroLevel.gainExp(355);
  }


}
