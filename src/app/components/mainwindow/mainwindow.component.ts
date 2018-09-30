import {Component, EventEmitter, OnInit} from '@angular/core';
import {SwitchesWindowsActive} from '../../classes/switcheswindowsactive';
import {Monster} from '../../classes/characters/monster';
import {Hero} from '../../classes/characters/hero';

@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.css']
})
export class MainwindowComponent implements OnInit {

  player: Hero = new Hero();
  enemy: Monster;

  start: boolean;

  active: SwitchesWindowsActive = new SwitchesWindowsActive();
  emitter = new EventEmitter(true);


  constructor() {
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
