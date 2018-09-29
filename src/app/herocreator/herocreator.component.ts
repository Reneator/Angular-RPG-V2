import {Component, Input, OnInit} from '@angular/core';
import {SwitchesWindowsActive} from '../classes/switcheswindowsactive';

@Component({
  selector: 'app-herocreator',
  templateUrl: './herocreator.component.html',
  styleUrls: ['./herocreator.component.css']
})
export class HerocreatorComponent implements OnInit {
  @Input() active: SwitchesWindowsActive;

  constructor() { }

  ngOnInit() {
  }

  createCharacter() {
    this.active.windowCharacterChreation = false;
    this.active.windowOverview = true;
  }

}
