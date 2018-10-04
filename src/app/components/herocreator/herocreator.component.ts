import {Component, OnInit} from '@angular/core';
import {HeroClass} from '../../classes/characters/hero-class';
import {PlayerWindow} from '../playerwindows';
import {HeroService} from '../../services/hero.service';
import {HeroLevelService} from '../../services/herolevel.service';

@Component({
  selector: 'app-herocreator',
  templateUrl: './herocreator.component.html',
  styleUrls: ['./herocreator.component.css'],
  providers: [HeroService, HeroLevelService]
})
export class HerocreatorComponent extends PlayerWindow implements OnInit {

  heroClassOptions: string[] = Object.keys(HeroClass);
  heroName: string;
  heroClass: HeroClass;

  constructor(private heroService: HeroService) {
    super();
  }

  ngOnInit() {
    this.heroClassOptions = this.heroClassOptions.slice(this.heroClassOptions.length / 2);
  }

  createCharacter() {
    this.heroService.generateHero(this.hero, this.heroName, this.heroClass);

    this.active.windowCharacterChreation = false;
    this.active.windowOverview = true;
  }

}
