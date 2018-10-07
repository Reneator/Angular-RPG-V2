import {GameObject} from '../../game-object';
import {Item} from '../Item';

export class ItemSlot extends GameObject {


  item: Item;

  isEmpty(): boolean {
    return this.item == null;
  }

}
