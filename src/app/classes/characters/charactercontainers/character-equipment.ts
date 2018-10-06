import {EquipmentSlot} from '../../items/equipment/equipment-slot';
import {EquipmentSlotType} from '../../items/equipment/equipment-slot.enum';

export class CharacterEquipment {

  private slots: EquipmentSlot[];


  getSlots(slotType: EquipmentSlotType): EquipmentSlot[] {
    if (slotType == null) {
      return this.slots;
    }
    const slots = [];

    this.slots.forEach(slot => {
      slots.push(slot);
    });

    return slots;
  }


}
