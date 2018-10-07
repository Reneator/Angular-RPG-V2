import {Equipment} from './equipment';
import {EquipmentSlotType} from './equipment-slot.enum';
import {ItemSlot} from './item-slot';
import {SlotType} from './slot.enum';

export class EquipmentSlot extends ItemSlot {

  slotType = SlotType.EQUIPMENT;
  equipmentSlotType: EquipmentSlotType;


  constructor(slotType: EquipmentSlotType) {
    super();
    this.equipmentSlotType = slotType;
  }




}
