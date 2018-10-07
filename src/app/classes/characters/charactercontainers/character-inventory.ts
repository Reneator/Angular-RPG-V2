import {Item} from '../../items/Item';

export class CharacterInventory {

  private items: Item[] = [];
  private size: number;


  constructor(size: number) {
    this.size = size;
  }

  getItems() {
    return this.items;
  }

  add(item: Item) {
    if (this.getEmptySlotsCount() > 0) {
      this.items.push(item);
    }
  }

  getEmptySlotsCount() {
    return this.size - this.items.length;
  }

}
