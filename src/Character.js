import numberOfCells from './numberOfCells';

const correctTypes = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type) {
    this.checkTheName(name);
    this.checkType(type);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  // eslint-disable-next-line class-methods-use-this
  checkTheName(name) {
    if (name.length <= 2 && name.length < 10) {
      throw new Error('Некорректное имя');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  checkType(type) {
    if (!correctTypes.some((typeFromArray) => typeFromArray === type)) {
      throw new Error('Некорректный тип');
    }
  }

  // set attack переписывает значение свойства в свойство characterAttack
  set attack(newAttack) {
    if (typeof (newAttack) !== 'number' && typeof (newAttack) !== 'undefined') {
      throw new Error(`передан неверный тип данных ${newAttack}`);
    }
    this.characterAttack = newAttack;
  }

  // get attact возвращает расчет силы атаки с учетом дурмана и расстояния до цели
  // для экземпляров класса Magician Daemon, для остальных возвращает атаку без изменений
  /* eslint-disable-next-line getter-return, consistent-return */
  get attack() {
    if (this.type === 'Magician' || this.type === 'Daemon') {
      const cells = numberOfCells();// расстояние до цели
      let newAttack = Math.round((this.characterAttack / 100) * (100 - (cells - 1) * 10));

      if (this.stoned) {
        newAttack -= (Math.log2(cells) * 5);
      }
      return newAttack;
    }
    return this.characterAttack;
  }

  // set stoned переписывает значение свойства в свойство characterStoned
  set stoned(check) {
    /* eslint-disable-next-line no-undef */
    if (typeof (check) !== 'boolean') {
      throw new Error(`передан неверный тип данных ${check}`);
    }

    this.characterStoned = check;
  }

  // get stoned возвращает значение свойства characterStoned
  get stoned() {
    return this.characterStoned;
  }
}
