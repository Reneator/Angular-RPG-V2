export class Character {
  name: string;
  hp: number;
  damage: number;
  alive: boolean;


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
