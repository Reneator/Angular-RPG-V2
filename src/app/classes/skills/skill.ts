import {ModeSkillActivation} from './mode-skill-activation.enum';
import {SkillClass} from './skill-class.enum';
import {Character} from '../characters/character';
import {GameObject} from '../game-object';

export class Skill extends GameObject {

  activationMode: ModeSkillActivation;
  skillClass: SkillClass;
  spellDamage: number;


  use(user: Character, target: Character) {
    user.damageCharacter(target);
  }

}
