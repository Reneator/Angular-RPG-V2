import {Perk} from '../../perks/perk';
import {PerkType} from '../../perks/perk-type.enum';

export class CharacterPerks {

  private perkList: Perk[];

  getPerksFor(perkType: PerkType) {
    if (perkType == null) {
      return this.perkList;
    }
    const perks = [];

    this.perkList.forEach(perk => perks.push(perk));
    return perks;
  }
}
