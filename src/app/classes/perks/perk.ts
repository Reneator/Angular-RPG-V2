import {PerkType} from './perk-type.enum';
import {Effect} from './effect';

export class Perk {

  private name: string;
  private type: PerkType;
  private effect: Effect;
  private repeatable: boolean;
  private reapats: number;
}
