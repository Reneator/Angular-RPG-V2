import {Character} from '../characters/character';

export interface Effect {

  // The effect-class is used, to give weapons, armor, items, skills, perks their own calcuatable individual effects.
  // so you can easily make effects that for example, you deal extra damage to a certain enemy-type

  effect(origin: Character, target: Character);

}
