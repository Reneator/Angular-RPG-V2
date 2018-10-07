import {GameObject} from '../../game-object';

export abstract class GameObjectContainer {

  private gameObjects: GameObject[] = [];


  public getById(id: number) {
    if (id == null) {
      console.error('The id is null');
    }
    this.gameObjects.forEach(gameObject => {
      if (gameObject.id === id) {
        return gameObject;
      }
    });

  }
}
