import {Equipment} from './equipment';
import {EquipmentSlotType} from './equipment-slot.enum';
import {GameObject} from '../../game-object';
import {ItemSlot} from './item-slot';
import {Item} from '../Item';

export class EquipmentSlot extends ItemSlot {

  slotType: EquipmentSlotType;


  constructor(slotType: EquipmentSlotType) {
    super();
    this.slotType = slotType;
  }

  equip(equipment: Equipment): Equipment {
    const currentlyEquipped = this.item;
    this.item = equipment;
    return <Equipment> currentlyEquipped;
  }
}
