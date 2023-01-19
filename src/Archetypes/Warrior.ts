import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static instances = 0;
  private _arquetipo:EnergyType;
 
  constructor(name:string) {
    super(name);
    this._arquetipo = 'stamina';
    Warrior.instances += 1;
  }

  get energyType(): EnergyType {
    return this._arquetipo;
  }

  static createdArchetypeInstances():number {
    return Warrior.instances;
  }
}