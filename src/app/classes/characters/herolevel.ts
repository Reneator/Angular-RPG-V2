export class HeroLevel {
  level: number;
  currentExp: number;
  currentExpStep: number;
  expRemain: number;
  overallExp: number;
  maxLevel: number;
  levelSteppings: number[];

  constructor(level: number, currentExp: number, levelSteppings: number[]) {
    this.levelSteppings = levelSteppings;
    this.level = level;
    this.currentExpStep = levelSteppings[level - 1];
    this.maxLevel = levelSteppings.length - 1;
    this.currentExp = currentExp;
    this.overallExp = this.getOverallExpForLevel(level);

    this.setExpRemain();

  }

  gainExp(exp: number): void {
    console.log(this.levelSteppings);
    let expLeft = exp;
    while (expLeft > 0) {
      if (this.currentExp + expLeft >= this.currentExpStep) {
        console.log('The Hero leveled up to level  ' + (this.level + 1) + ' by gaining ' + expLeft + ' Exp currentExp needed for lvlup: ' + this.currentExpStep + ' currentExP before exp gained: ' + this.currentExp);
        const expGain = (this.currentExpStep - this.currentExp);
        expLeft = expLeft - expGain;
        console.log('There is ' + expLeft + ' Experience left to distribute!');
        this.currentExp = 0;
        this.overallExp += expGain;
        this.increaseLevel();
      } else {
        this.currentExp += expLeft;
        this.overallExp += expLeft;
        console.log('The hero gained ' + expLeft + ' experience! New CurrentExp: ' + this.currentExp);

        expLeft = 0;
      }
    }

    this.setExpRemain();
  }

  setExpRemain(): void {
    this.expRemain = this.currentExpStep - this.currentExp;
  }

  increaseLevel(): void {
    // trigger level-event
    if (this.level <= this.maxLevel) {
      this.level++;
      this.currentExp = 0;
      this.overallExp += this.currentExpStep;
      this.setNewCurrentExpStep();
    }

  }

  private setNewCurrentExpStep(): void {
    this.currentExpStep = this.levelSteppings[this.level - 1];
  }

  getOverallExpForLevel(level: number): number {
    let exp = 0;
    for (let i = 1; i < level; i++) {
      exp += this.levelSteppings[i];
    }
    return exp;
  }

}
