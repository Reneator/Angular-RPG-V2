import {Component, OnInit} from '@angular/core';
import {PlayerWindow} from '../playerwindows';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent  extends PlayerWindow  implements OnInit {


  constructor() {
    super();
  }

  ngOnInit() {
  }

  closeInventory() {
    this.active.windowInventory = false;
  }

}
