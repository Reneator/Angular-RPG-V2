import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../../classes/characters/character';
import {Calculator} from '../../../classes/calculators/calculator';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.css']
})
export class EnemyComponent implements OnInit {
  @Input () enemy: Character;

  constructor() { }

  ngOnInit() {
  }

  // attackEnemy(enemy) {
  //   Calculator.attackCharacter(this.hero, enemy);
  //   //
  //   // if (!enemy.alive) {
  //   //   return;
  //   // }
  //   // enemy.damageCharacter(this.hero);
  //   // this.hero.damageCharacter(enemy);
  //   // this.hero.heroLevel.gainExp(355);
  // }

}
