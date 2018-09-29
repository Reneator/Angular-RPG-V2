import {Component, Input, OnInit} from '@angular/core';
import {SwitchesWindowsActive} from '../classes/switcheswindowsactive';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() active: SwitchesWindowsActive;

  constructor() { }

  ngOnInit() {
  }

}
