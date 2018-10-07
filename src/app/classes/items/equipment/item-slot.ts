import {GameObject} from '../../game-object';
import {Item} from '../Item';
import {SlotType} from './slot.enum';
import {Equipment} from './equipment';

export abstract class ItemSlot extends GameObject {

  slotType: SlotType;
  item: Item;

  isEmpty(): boolean {
    return this.item == null;
  }

  exchangeItem(equipmentSlot: ItemSlot) {
    console.log('Exchange Items instanceOf ItemSlot: ' + (equipmentSlot instanceof ItemSlot));
    const newItem = equipmentSlot.exchange(this.item);
    this.exchange(newItem);
  }

  exchange(item: Item): Item {
    const currentlyEquipped = this.item;
    this.item = item;
    return currentlyEquipped;
  }

}
