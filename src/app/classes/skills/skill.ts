import {ModeSkillActivation} from './mode-skill-activation';
import {SkillClass} from './skill-class.enum';
import {Character} from '../characters/character';

export class Skill {

  activationMode: ModeSkillActivation;
  skillClass: SkillClass;


  cast(user: Character, target: Character) {

  }

}
