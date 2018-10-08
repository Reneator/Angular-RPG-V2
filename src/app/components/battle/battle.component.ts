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
  static limit = 300;
  static lastFrameTimeMs = 0;
  static maxFPS = 30;
  static delta = 0;
  static timestep = 1000 / 60;
  static fps = 30;
  static framesThisSecond = 0;
  static lastFpsUpdate = 0;

  private static combatActive = false;


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


  //
  // static async mainLoop(timestamp) {
  //
  //   if (!BattleComponent.combatActive) {
  //     return;
  //   }
  //
  //   // Throttle the frame rate.
  //   if (timestamp < BattleComponent.lastFrameTimeMs + (1000 / BattleComponent.maxFPS)) {
  //     console.log('TimeStamp ifMaxFps: ' + timestamp);
  //
  //     requestAnimationFrame(BattleComponent.mainLoop);
  //     return;
  //   }
  //   BattleComponent.delta += timestamp - BattleComponent.lastFrameTimeMs;
  //   BattleComponent.lastFrameTimeMs = timestamp;
  //
  //   if (timestamp > BattleComponent.lastFpsUpdate + 1000) {
  //     BattleComponent.fps = 0.25 * BattleComponent.framesThisSecond + 0.75 * BattleComponent.fps;
  //
  //     BattleComponent.lastFpsUpdate = timestamp;
  //     BattleComponent.framesThisSecond = 0;
  //   }
  //   BattleComponent.framesThisSecond++;
  //
  //   let numUpdateSteps = 0;
  //   while (BattleComponent.delta >= BattleComponent.timestep) {
  //     console.log('update!');
  //     // console.log('TimeStamp While: ' + timestamp + ' delta-timestep:  ' + (BattleComponent.delta -= BattleComponent.timestep));
  //
  //     BattleComponent.delta -= BattleComponent.timestep;
  //     // await BattleComponent.timer(BattleComponent.delta + 100);
  //
  //     if (++numUpdateSteps >= 240) {
  //       // panic();
  //       break;
  //     }
  //   }
  //   // doTick();
  //
  //   console.log('draw');
  //   // draw();
  //   requestAnimationFrame(BattleComponent.mainLoop);
  // }

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

  startCombat() {

    BattleComponent.combatActive = true;
    const foo = this.combatLoop();
    // requestAnimationFrame(this.mainLoop());

  }

  deactivateCombat() {
    BattleComponent.combatActive = false;
  }

  // async combatLoop(timestamp) {
  //   // Throttle the frame rate.
  //   if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
  //     requestAnimationFrame(mainLoop);
  //     return;
  //   }
  //   delta += timestamp - lastFrameTimeMs;
  //   lastFrameTimeMs = timestamp;
  //
  //   if (timestamp > lastFpsUpdate + 1000) {
  //     fps = 0.25 * framesThisSecond + 0.75 * fps;
  //
  //     lastFpsUpdate = timestamp;
  //     framesThisSecond = 0;
  //   }
  //   framesThisSecond++;
  //
  //   var numUpdateSteps = 0;
  //   while (delta >= timestep) {
  //     update(timestep);
  //     delta -= timestep;
  //     if (++numUpdateSteps >= 240) {
  //       panic();
  //       break;
  //     }
  //   }
  //   draw();
  //   requestAnimationFrame(mainLoop);
  // }
  //
  // async combatLoop(): Promise<boolean> {
  //
  //   console.log('Combat Loop started');
  //
  //   let time = 0;
  //   const tickRate = 50000;
  //   while (this.combatActive) {
  //
  //     time += tickRate;
  //     setTimeout(tickRate);
  //
  //     console.log('Combat Loop runs since ' + time + ' ms');
  //   }
  //
  //   return true;
  //
  // }


  async combatLoop() {
    const startTime = new Date();
    const attackDelay = 1000;
    let lastAttack = new Date();
    const lastTick = new Date();
    while (BattleComponent.combatActive) {
      // console.log('loop started ' + startTime + ' ms ago and running since: ' + (new Date().getTime() - startTime.getTime()));
      await this.timer(50);

      if ((new Date().getTime() - lastAttack.getTime()) >= attackDelay) {
        console.log('attack: time since last attack: ' + (new Date().getTime() - lastAttack.getTime()) + ' ms!');
        lastAttack = new Date();
      }
    }
  }

  timer(ms) {
    return new Promise(res => setTimeout(res, ms));
  }


}
