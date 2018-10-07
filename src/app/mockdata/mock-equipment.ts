import {Equipment} from '../classes/items/equipment/equipment';
import {EquipmentSlotType} from '../classes/items/equipment/equipment-slot.enum';
import {EquipmentType} from '../classes/items/equipment/equipment-type.enum';

export const EQUIPMENT_LIST: Equipment[] = [
  {id: 1, name: 'axe', goldValue: 5, value: 10, slotType: EquipmentSlotType.WEAPON, type: EquipmentType.WEAPON, img: 'assets/i1-axe.png'}

];
