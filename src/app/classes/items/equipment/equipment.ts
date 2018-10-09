import {EquipmentSlotType} from './equipment-slot.enum';
import {Item} from '../Item';
import {EquipmentType} from './equipment-type.enum';

export class Equipment extends Item {
  type: EquipmentType;
  slotType: EquipmentSlotType;
  value: number;


  constructor(itemId: number, name: string, value: number, goldValue: number,   type: EquipmentType, slotType: EquipmentSlotType) {
    super(goldValue, itemId, name);
    this.type = type;
    this.slotType = slotType;
    this.value = value;
  }
}
