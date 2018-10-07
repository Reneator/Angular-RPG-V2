import {EquipmentSlotType} from './equipment-slot.enum';
import {Item} from '../Item';
import {EquipmentType} from './equipment-type.enum';

export class Equipment extends Item {
  type: EquipmentType;
  slotType: EquipmentSlotType;
  value: number;

}
