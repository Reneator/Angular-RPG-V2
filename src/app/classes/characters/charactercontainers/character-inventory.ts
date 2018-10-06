import {Item} from '../../items/Item';

export class CharacterInventory {

  private items: Item[];
  private size: number;

  getItems() {
    return this.items;
  }
}
