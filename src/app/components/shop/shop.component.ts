import {Component, Input, OnInit} from '@angular/core';
import {SwitchesWindowsActive} from '../../classes/switcheswindowsactive';
import {Hero} from '../../classes/characters/hero';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @Input() active: SwitchesWindowsActive;
  @Input() hero: Hero;


  constructor() { }

  ngOnInit() {
  }

}
