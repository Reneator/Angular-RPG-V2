import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlayerWindow} from '../playerwindows';
import {Item} from '../../classes/items/Item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent extends PlayerWindow implements OnInit {


  constructor() {
    super();
  }

  ngOnInit() {
  }

  clickItem(item: Item) {
    console.log('An item has been clicked: ' + item.name);

  }

}
