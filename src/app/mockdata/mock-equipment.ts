import {Equipment} from '../classes/items/equipment/equipment';
import {EquipmentSlotType} from '../classes/items/equipment/equipment-slot.enum';
import {EquipmentType} from '../classes/items/equipment/equipment-type.enum';

export const EQUIPMENT_LIST: Equipment[] = [
  {id: 500000, equipmentId: 1, name: 'smol Axe', goldValue: 5, value: 10, slotType: EquipmentSlotType.WEAPON, type: EquipmentType.WEAPON, img: 'assets/i1-axe.png'},
  {id: 600000, equipmentId: 2, name: 'Big Axe', goldValue: 50, value: 100, slotType: EquipmentSlotType.WEAPON, type: EquipmentType.WEAPON, img: 'assets/i2-big-axe.png'}

];
