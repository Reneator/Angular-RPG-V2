import {EquipmentSlot} from '../../items/equipment/equipment-slot';
import {EquipmentSlotType} from '../../items/equipment/equipment-slot.enum';
import {ItemSlot} from '../../items/equipment/item-slot';

export class CharacterEquipment {

  private slots: EquipmentSlot[] = [];


  getSlots(slotType: EquipmentSlotType): EquipmentSlot[] {
    if (slotType == null) {
      return this.slots;
    }
    const slots = [];

    this.slots.forEach(slot => {
      if (slot.equipmentSlotType === slotType) {
        slots.push(slot);
      }
    });

    return slots;
  }


  addSlot(slotType: EquipmentSlotType) {
    this.slots.push(new EquipmentSlot(slotType));
  }

  addEquipmentSlot(slot: EquipmentSlot) {
    this.slots.push(slot);
  }

  public getById(id: number): ItemSlot {
    if (id == null) {
      console.error('The id is null');
    }

    let returnSlot: ItemSlot;
    this.slots.forEach(slot => {
      if (slot.id === id) {
        returnSlot = slot;
      }
    });

    return returnSlot;

  }

}
