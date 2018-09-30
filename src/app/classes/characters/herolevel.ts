export class HeroLevel {
  level: number;
  currentExp: number;
  currentExpStep: number;
  expRemain: number;
  overallExp: number;
  maxLevel: number;
  levelSteppings: number[];

  // constructor(level: number, currentExp: number, levelSteppings: number[]) {
  //   this.levelSteppings = levelSteppings;
  //   this.level = level;
  //   this.currentExpStep = levelSteppings[level];
  //   this.maxLevel = levelSteppings.length - 1;
  //   this.currentExp = currentExp;
  //   this.overallExp = this.getOverallExpForLevel(level);
  //
  //   this.setExpRemain();
  //
  // }

  gainExp(exp: number): void {
    if (this.currentExp + exp >= this.currentExpStep) {
      this.currentExp = exp - this.currentExp;
      this.overallExp += exp;
      this.increaseLevel();
    } else {
      this.currentExp += exp;
      this.overallExp += exp;

    }
    this.setExpRemain();
  }

  setExpRemain(): void {
    this.expRemain = this.currentExpStep - this.currentExp;
  }

  increaseLevel(): void {
    if (this.level <= this.maxLevel) {
      this.level++;
      this.currentExp = 0;
      this.overallExp += this.currentExpStep;
      this.setNewCurrentExpStep();
    }

  }

  private setNewCurrentExpStep(): void {
    this.currentExpStep = this.levelSteppings[this.level];
  }

  getOverallExpForLevel(level: number): number {
    let exp = 0;
    for (let i = 1; i < level; i++) {
      exp += this.levelSteppings[i];
    }
    return exp;
  }

}
