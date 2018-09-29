import {Component, Input, OnInit} from '@angular/core';
import {SwitchesWindowsActive} from '../classes/switcheswindowsactive';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() active: SwitchesWindowsActive;

  constructor() {
  }

  ngOnInit() {
  }

  openWindowInventory() {
    this.active.windowInventory = !this.active.windowInventory;
  }

  openWindowCharacter() {
    this.active.windowCharacter = !this.active.windowCharacter;

  }

  openWindowSkill() {
    this.active.windowSkill = !this.active.windowSkill;

  }

  openWindowBattle() {
    this.active.windowBattle = !this.active.windowBattle;
  }

  openWindowShop() {
    this.active.windowShop = !this.active.windowShop;
  }
}
