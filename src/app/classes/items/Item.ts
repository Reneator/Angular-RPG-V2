import {GameObject} from '../game-object';

export class Item extends GameObject {
  goldValue: number;
  itemId: number;
  name: string;


  constructor(goldValue: number, itemId: number, name: string) {
    super();
    this.goldValue = goldValue;
    this.itemId = itemId;
    this.name = name;
  }
}
