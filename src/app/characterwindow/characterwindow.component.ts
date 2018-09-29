import {Component, Input, OnInit} from '@angular/core';
import {SwitchesWindowsActive} from '../classes/switcheswindowsactive';

@Component({
  selector: 'app-characterwindow',
  templateUrl: './characterwindow.component.html',
  styleUrls: ['./characterwindow.component.css']
})
export class CharacterwindowComponent implements OnInit {

  @Input() active: SwitchesWindowsActive;

  constructor() { }

  ngOnInit() {
  }

}
