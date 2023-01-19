import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoint:number;
  static instances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoint = 99;
    Elf.instances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoint;
  }

  static createdRacesInstances():number {
    return Elf.instances;
  }
}