import {Equipment} from '../classes/items/equipment/equipment';
import {EquipmentSlotType} from '../classes/items/equipment/equipment-slot.enum';
import {EquipmentType} from '../classes/items/equipment/equipment-type.enum';

export const EQUIPMENT_LIST: Equipment[] = [

  new Equipment(1, 'smol Axe', 2, 5, EquipmentType.WEAPON, EquipmentSlotType.WEAPON),
  new Equipment(2, 'Big Axe', 5, 5, EquipmentType.WEAPON, EquipmentSlotType.WEAPON),

];
