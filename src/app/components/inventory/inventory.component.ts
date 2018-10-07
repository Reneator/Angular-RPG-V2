import {Component, OnInit} from '@angular/core';
import {PlayerWindow} from '../playerwindows';
import {InventorySlot} from '../../classes/items/inventory-slot';

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

  clickItem(inventorySlot: InventorySlot) {
    if (inventorySlot == null) {
      console.log('Null Inventory-Slot');
    } else {
      if (inventorySlot.isEmpty()) {
        console.log('You clicked an empty Inventor-slot!');
      } else {
        console.log('An Inventory-Slot has been clickd with item: ' + inventorySlot.item.name + ' inside.');
      }
    }
  }
}
