import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(private _name:string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this.maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get energy() {
    return { ...this._energy };
  }

  get dexterity() {
    return this._dexterity;
  }

  get race() {
    return this._race;
  }
  
  get archetype() {
    return this._archetype;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(): void {
    console.log(`${this._name} Ainda não tem especial`);
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this.maxLifePoints < this._race.maxLifePoints) {
      this.maxLifePoints += getRandomInt(1, 10);
      this._lifePoints = this.maxLifePoints;
      if (this.maxLifePoints > this._race.maxLifePoints) {
        this.maxLifePoints = this._race.maxLifePoints;
        this._lifePoints = this.maxLifePoints;
      }
    }
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
      if (this._lifePoints <= 0) {
        this._lifePoints = -1;
      }
    } 
    if (damage <= 0) {
      this._lifePoints -= 1;
    }

    return this._lifePoints;
  }
}