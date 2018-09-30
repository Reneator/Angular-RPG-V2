import {Component, Input, OnInit} from '@angular/core';
import {Monster} from '../../classes/characters/monster';
import {PlayerWindow} from '../playerwindows';
import {Skill} from '../../classes/skills/skill';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent extends PlayerWindow implements OnInit {
  @Input() enemy: Monster;

  constructor() {
    super();
  }

  ngOnInit() {
  }


  useSkill(skill: Skill) {
    skill.use(this.hero, this.enemy);
  }

  attackEnemy() {
    this.enemy.damageCharacter(this.hero);
  }
}
