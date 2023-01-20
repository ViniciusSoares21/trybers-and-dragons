import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private player1:Fighter, 
    private player2:SimpleFighter[] | Fighter[],
  ) {
    super(player1);
  }

  fight(): number {
    let finaly = true;
    while (finaly) {
      this.player1.attack(this.player2[0]);

      this.player2[0].attack(this.player1);

      if (this.player1.lifePoints <= 0 || this.player2[0].lifePoints <= 0) {
        finaly = false;
      } 
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
} 
