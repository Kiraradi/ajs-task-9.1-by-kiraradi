import Character from './Character';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 100;
    this.defence = 40;
    this.stoned = false;// Свойство показывает наложен ли "дурман" на персанажа.
  }
}
