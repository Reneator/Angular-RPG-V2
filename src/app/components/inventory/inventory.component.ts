import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlayerWindow} from '../playerwindows';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent  extends PlayerWindow  implements OnInit {

  @Output() voted = new EventEmitter<string>();

  constructor() {
    super();
  }

  ngOnInit() {
  }

  closeInventory() {
    this.voted.emit('WTF');
    this.active.windowInventory = false;
  }



}
