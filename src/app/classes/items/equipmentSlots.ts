import {Equipment} from './equipment';

export class EquipmentSlots {
  headSlot: Equipment;
  shoulderSlot: Equipment;
  chestSlot: Equipment;
  armsSlot: Equipment;
  underwearSlot: Equipment;
}

export enum Slots {
  HEAD, SHOULDER, CHEST, UNDERWEAR, ARMS
}
