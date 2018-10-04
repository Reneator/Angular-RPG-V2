import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {SwitchesWindowsActive} from '../../classes/switcheswindowsactive';
import {Monster} from '../../classes/characters/monster';
import {Hero} from '../../classes/characters/hero';
import {Character} from '../../classes/characters/character';
import {EventCharacterDeath} from '../../classes/event/event-character-death';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.css'],
})
export class MainwindowComponent implements OnInit {

  @ViewChild('drawer') public drawer: MatSidenav;

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
          this.restartGame();
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

  restartGame() {
    this.openGameOverScreen();
    this.deactivateAllWindows();
    this.active.windowCharacterChreation = true;
  }

  openGameOverScreen() {
    this.active.windowGameOverScreen = true;
    this.drawer.toggle();
  }

  public deactivateAllWindows() {
    this.active.windowOverview = false;
    this.active.windowInventory = false;
    this.active.windowSkill = false;
    this.active.windowCharacter = false;
    this.active.windowSkill = false;
    this.active.windowBattle = false;
    this.active.windowShop = false;
    this.active.windowCharacterChreation = false;
    this.active.windowGameOverScreen = false;
  }



}
