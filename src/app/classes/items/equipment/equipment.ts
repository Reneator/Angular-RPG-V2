import {EquipmentSlotType} from './equipment-slot.enum';
import {Item} from '../Item';
import {EquipmentType} from './equipment-type.enum';

export class Equipment extends Item {
  type: EquipmentType;
  equipmentId: number;
  slotType: EquipmentSlotType;
  value: number;

}
