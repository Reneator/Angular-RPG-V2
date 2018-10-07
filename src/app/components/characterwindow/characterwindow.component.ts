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

  click(equipmentSlot: EquipmentSlot) {
    if (equipmentSlot == null) {
      console.log('Null as EquipmentSlot');
    } else {
      if (equipmentSlot.isEmpty()) {
        console.log('You clicked the empty equipment-Slot: ' + equipmentSlot.slotType);
      } else {
        console.log('You clicked the equipment-Slot: ' + equipmentSlot.slotType +
          ' with the item: ' + equipmentSlot.item.name + ' inside!');
      }
    }

  }
}
