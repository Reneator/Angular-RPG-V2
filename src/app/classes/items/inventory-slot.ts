import {Item} from './Item';
import {ItemSlot} from './equipment/item-slot';

export class InventorySlot extends ItemSlot {

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
