import {Equipment} from './equipment';
import {EquipmentSlotType} from './equipment-slot.enum';

export class EquipmentSlot {

  slotType: EquipmentSlotType;
  equipment: Equipment;


  constructor(slotType: EquipmentSlotType) {
    this.slotType = slotType;
  }

  equip(equipment: Equipment): Equipment {
    const currentlyEquipped = this.equipment;
    this.equipment = equipment;
    return currentlyEquipped;
  }
}
