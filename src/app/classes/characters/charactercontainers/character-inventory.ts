import {Item} from '../../items/Item';
import {InventorySlot} from '../../items/inventory-slot';

export class CharacterInventory {

  private inventorySlots: InventorySlot[] = [];
  private size: number;


  constructor(size: number) {
    this.size = size;
    for (let i = 0; i <= this.size - 1; i++) {
      this.inventorySlots.push(new InventorySlot(i));
    }
  }

  getInventorySlots() {
    return this.inventorySlots;
  }

  // getEmptySlots() {
  //   this.inventorySlots.forEach( slot => )
  //
  //   return this.size - this.inventorySlots.length;
  // }

  addItem(item: Item): boolean {
    return this.inventorySlots.some(
      slot => {
          if (slot.isEmpty()) {
            slot.exchange(item);
            return true;
          }
      });
  }

  getEmptySlot() {

  }

}
