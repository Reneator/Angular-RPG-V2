import {Component, OnInit} from '@angular/core';
import {HeroClass} from '../../classes/characters/hero-class';
import {PlayerWindow} from '../playerwindows';

@Component({
  selector: 'app-herocreator',
  templateUrl: './herocreator.component.html',
  styleUrls: ['./herocreator.component.css']
})
export class HerocreatorComponent extends PlayerWindow implements OnInit {

  heroClassOptions: string[] = Object.keys(HeroClass);

  constructor() {
    super();
  }

  ngOnInit() {
    this.heroClassOptions = this.heroClassOptions.slice(this.heroClassOptions.length / 2);
  }

  createCharacter() {
    this.active.windowCharacterChreation = false;
    this.active.windowOverview = true;
  }

}
