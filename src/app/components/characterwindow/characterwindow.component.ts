import {Component, OnInit} from '@angular/core';
import {PlayerWindow} from '../playerwindows';
import {Equipment} from '../../classes/items/equipment/equipment';

@Component({
  selector: 'app-characterwindow',
  templateUrl: './characterwindow.component.html',
  styleUrls: ['./characterwindow.component.css']
})
export class CharacterwindowComponent extends PlayerWindow implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  hello() {
    console.log(this.hero);
  }

  identify(equipment: Equipment) {
    console.log('You clickd on the equipped Item:' + equipment.name);
  }
}
