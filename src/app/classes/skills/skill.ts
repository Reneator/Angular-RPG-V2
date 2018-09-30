import {ModeSkillActivation} from './mode-skill-activation.enum';
import {SkillClass} from './skill-class.enum';
import {Character} from '../characters/character';

export class Skill {

  activationMode: ModeSkillActivation;
  skillClass: SkillClass;
  spellDamage: number;


  use(user: Character, target: Character) {
    user.damageCharacter(target);
  }

}
