import {Component, EventEmitter, OnInit} from '@angular/core';
import {SwitchesWindowsActive} from '../../classes/switcheswindowsactive';
import {Monster} from '../../classes/characters/monster';
import {Hero} from '../../classes/characters/hero';
import {Character} from '../../classes/characters/character';
import {EventCharacterDeath} from '../../classes/event/event-character-death';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.css'],
})
export class MainwindowComponent implements OnInit {

  player: Hero = new Hero();

  enemy: Monster = new Monster(200);

  start: boolean;

  active: SwitchesWindowsActive = new SwitchesWindowsActive();
  emitter = new EventEmitter(true);

  private _deathSubscription;


  constructor() {

    this._deathSubscription = Character.onDeath.subscribe({
      next: (event: EventCharacterDeath) => {
        if (event.victim instanceof Hero) {
          console.log(`The player died, now restart the game!`);
          // restartGame();
        }
      }
    });
  }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.active.windowCharacterChreation = true;
    this.start = true;
  }

  onVoted(hello: string) {
    console.log(hello);
  }

}
