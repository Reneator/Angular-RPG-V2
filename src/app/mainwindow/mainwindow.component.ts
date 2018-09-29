import {Component, OnInit} from '@angular/core';
import {Hero} from '../classes/characters/hero';
import {Monster} from '../classes/characters/monster';
import {SwitchesWindowsActive} from '../classes/switcheswindowsactive';

@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.css']
})
export class MainwindowComponent implements OnInit {

  player: Hero;
  enemy: Monster;

  start: boolean;

  active: SwitchesWindowsActive = new SwitchesWindowsActive();


  constructor() {
  }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.active.windowCharacterChreation = true;
    this.start = true;
  }

}
