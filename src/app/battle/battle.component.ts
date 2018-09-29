import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../classes/characters/hero';
import {Monster} from '../classes/characters/monster';
import {SwitchesWindowsActive} from '../classes/switcheswindowsactive';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  @Input() active: SwitchesWindowsActive;

  @Input() hero: Hero;
  @Input() enemy: Monster;

  constructor() {
  }

  ngOnInit() {
  }


}
