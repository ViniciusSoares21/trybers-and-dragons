import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static instances = 0;
  private _arquetipo:EnergyType;
 
  constructor(name:string) {
    super(name);
    this._arquetipo = 'mana';
    Mage.instances += 1;
  }

  get energyType(): EnergyType {
    return this._arquetipo;
  }

  static createdArchetypeInstances():number {
    return Mage.instances;
  }
}