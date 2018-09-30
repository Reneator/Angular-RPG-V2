import {Component, Input, OnInit} from '@angular/core';
import {SwitchesWindowsActive} from '../../classes/switcheswindowsactive';
import {Hero} from '../../classes/characters/hero';
import {Monster} from '../../classes/characters/monster';
import {PlayerWindow} from '../playerwindows';

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


}
