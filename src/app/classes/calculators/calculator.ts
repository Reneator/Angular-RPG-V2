import {Character} from '../characters/character';

export class Calculator {

  public static attackCharacter(origin: Character, target: Character) {
    target.damageCharacter(origin);
    // let damageValue: number;
    // damageValue = getDamageValueStats(origin, target);
    // damageValue += getDamageValueWeapon(origin, target);
    // damageValue += getDamageValuePerks(origin, target);
    // damageValue += getDamageValueBuffs(origin, target);
    //
    // let damageReduction = getTargetValueResistanceStats();
    // damageReduction += getTargetValueResistanceEquipment();
    // damageReduction += getTargetValueResistancePerks();
    // damageReduction += getTargetValueResistanceBuffs();
  }

  public static getHp() {

  }

  public static getArmor() {

  }

  public static getDamage() {

  }

}
