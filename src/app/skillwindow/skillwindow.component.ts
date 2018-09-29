import {Component, Input, OnInit} from '@angular/core';
import {SwitchesWindowsActive} from '../classes/switcheswindowsactive';

@Component({
  selector: 'app-skillwindow',
  templateUrl: './skillwindow.component.html',
  styleUrls: ['./skillwindow.component.css']
})
export class SkillwindowComponent implements OnInit {

  @Input() active: SwitchesWindowsActive;

  constructor() { }

  ngOnInit() {
  }

}
