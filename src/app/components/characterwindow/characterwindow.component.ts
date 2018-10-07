import {Component, OnInit} from '@angular/core';
import {PlayerWindow} from '../playerwindows';
import {EquipmentSlot} from '../../classes/items/equipment/equipment-slot';

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


}
