import {Item} from './Item';
import {ItemSlot} from './equipment/item-slot';
import {SlotType} from './equipment/slot.enum';

export class InventorySlot extends ItemSlot {

  slotType = SlotType.INVENTORY;
  position: number;

  constructor(position: number) {
    super();
    this.position = position;
  }

  exchange(item: Item) {
    const itemOld = this.item;
    this.item = item;
    if (itemOld != null) {
      return itemOld;
    }
    return null;
  }

}
