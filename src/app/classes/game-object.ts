export class GameObject {
  static maxId = 0;
  id: number;
  img: string;

  constructor() {
    this.id = GameObject.maxId;
    GameObject.maxId++;
  }

}
