import {Character} from '../characters/character';

export interface Effect {

  effect(origin: Character, target: Character);

}
