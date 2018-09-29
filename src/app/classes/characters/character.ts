export class Character {
  name: string;
  hp: number;
  damage: number;
  alive: boolean;

  constructor(name: string, hp: number, damage: number, alive: boolean) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
    this.alive = alive;
  }

  damageCharacter(other: Character): void {
    if (this.hp - other.damage <= 0) {
      this.hp = 0;
      this.die();
    } else {
      this.hp = this.hp - other.damage;
    }
  }

  die(): void {
    this.alive = false;
  }
}
