import {Component, OnInit} from '@angular/core';
import {PlayerWindow} from '../playerwindows';

@Component({
  selector: 'app-skillwindow',
  templateUrl: './skillwindow.component.html',
  styleUrls: ['./skillwindow.component.css']
})
export class SkillwindowComponent extends PlayerWindow implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
