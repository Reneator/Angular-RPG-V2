import {Component, Input, OnInit} from '@angular/core';
import {SwitchesWindowsActive} from '../classes/switcheswindowsactive';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @Input() active: SwitchesWindowsActive;

  constructor() { }

  ngOnInit() {
  }

}
