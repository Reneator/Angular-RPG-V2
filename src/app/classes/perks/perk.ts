import {PerkType} from './perk-type.enum';
import {Effect} from '../effects/effect';
import {GameObject} from '../game-object';

export class Perk extends GameObject{

  private name: string;
  private type: PerkType;
  private effect: Effect;
  private repeatable: boolean;
  private reapats: number;
  private priority: number;
}
