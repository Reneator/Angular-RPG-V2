import {Component, Input, OnInit} from '@angular/core';
import {EquipmentSlot} from '../../../classes/items/equipment/equipment-slot';
import {DndDropEvent} from 'ngx-drag-drop';
import {CharacterEquipment} from '../../../classes/characters/charactercontainers/character-equipment';
import {CharacterInventory} from '../../../classes/characters/charactercontainers/character-inventory';
import {ItemSlot} from '../../../classes/items/equipment/item-slot';
import {SlotType} from '../../../classes/items/equipment/slot.enum';
import {Hero} from '../../../classes/characters/hero';

@Component({
  selector: 'app-equipment-slot',
  templateUrl: './equipment-slot.component.html',
  styleUrls: ['./equipment-slot.component.css']
})
export class EquipmentSlotComponent implements OnInit {

  @Input() equipmentSlot: EquipmentSlot;
  @Input() hero: Hero;
  draggable = {
    data: this.equipmentSlot,
    effectAllowed: 'all',
    disable: false,
    handle: false,
  };

  constructor() {
  }

  ngOnInit() {
  }

  click(equipmentSlot: EquipmentSlot) {
    if (equipmentSlot == null) {
      console.log('Null as EquipmentSlot');
    } else {
      if (equipmentSlot.isEmpty()) {
        console.log('You clicked the empty equipment-Slot: ' + equipmentSlot.equipmentSlotType);
      } else {
        console.log('You clicked the equipment-Slot: ' + equipmentSlot.equipmentSlotType +
          ' with the item: ' + equipmentSlot.item.name + ' inside!');
      }
    }

  }

  onDrop(event: DndDropEvent) {

    const slot: ItemSlot = event.data;
    if (slot.id === this.equipmentSlot.id) {
      return;
    }

    let originSlot: ItemSlot;
    if (slot.slotType === SlotType.INVENTORY) {
      originSlot = this.hero.inventory.getById(slot.id);
    }
    if (slot.slotType === SlotType.EQUIPMENT) {
      originSlot = this.hero.equipment.getById(slot.id);
    }

    if (originSlot == null) {
      console.error('Es konnte kein ItemSlot für die Id ' + slot.id + ' gefunden werden');
      return;
    }

    // originSlot.exchange(this.equipmentSlot);


    // if(){
    //
    // }
    // this.characterInventory.getById();

    this.equipmentSlot.exchangeItem(originSlot);

    console.log('dropped onto: ' + JSON.stringify(this.equipmentSlot), JSON.stringify(event, null, 2));
  }

}
