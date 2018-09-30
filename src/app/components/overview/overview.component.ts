import {Component, OnInit} from '@angular/core';
import {PlayerWindow} from '../playerwindows';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent extends PlayerWindow implements OnInit {


  constructor() {
    super();
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
