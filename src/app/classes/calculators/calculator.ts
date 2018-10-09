import {Character} from '../characters/character';
import {Equipment} from '../items/equipment/equipment';
import {EquipmentSlotType} from '../items/equipment/equipment-slot.enum';

export class Calculator {

  public static attackCharacter(origin: Character, target: Character) {
    // target.damageCharacter(origin);
    let damageValue = 0;
    // damageValue = getDamageValueStats(origin, target);
    damageValue += Calculator.getDamageValueWeapon(origin, target);
    // damageValue += getDamageValuePerks(origin, target);
    // damageValue += getDamageValueBuffs(origin, target);
    //
    // let damageReduction = getTargetValueResistanceStats();
    // damageReduction += getTargetValueResistanceEquipment();
    // damageReduction += getTargetValueResistancePerks();
    // damageReduction += getTargetValueResistanceBuffs();

    target.damageCharacterDirectly(origin, damageValue);
  }

  public static getDamageValueWeapon(origin: Character, target: Character): number {
    let damage = 0;
    origin.equipment.getSlots(EquipmentSlotType.WEAPON).forEach(equipment => {
      const equip = <Equipment> equipment.item;
      damage += equip.value;
    });
    return damage;
  }

  public static getHp() {

  }

  public static getArmor() {

  }

  public static getDamage() {

  }

}
