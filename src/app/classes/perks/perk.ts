import {PerkType} from './perk-type.enum';
import {Effect} from '../effects/effect';

export class Perk {

  private name: string;
  private type: PerkType;
  private effect: Effect;
  private repeatable: boolean;
  private reapats: number;
  private priority: number;
}
