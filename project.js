class Game {
  constructor(player1Name = 'Superman', player2Name = 'Darkseid') {
    // Game state tracking
    this.theEnd = false;
    this.countPl1 = 0; // Heal counter for player 1
    this.countPl2 = 0; // Heal counter for player 2

    // Reset button setup
    this.resetBtn = document.querySelector('.btn-reset');
    this.resetBtn.addEventListener('click', this.reset.bind(this));

    // Winner message placeholders
    this.winMsg1 = document.querySelector('.pl1-wins');
    this.winMsg2 = document.querySelector('.pl2-wins');

    // Player 1 setup
    this.player1 = {
      name: player1Name,
      health: 100,
    };
    this.pl1 = document.querySelector('.pl1');
    this.pl1.textContent = "Health: " + this.player1.health;

    // Player 2 setup
    this.player2 = {
      name: player2Name,
      health: 100,
    };
    this.pl2 = document.querySelector('.pl2');
    this.pl2.textContent = "Health: " + this.player2.health;
  }

  // Announce the winner in UI + console
  declareWinner() {
    if (this.player1.health === 0) {
      this.winMsg2.textContent = this.player2.name + " wins";
      console.log(this.player2.name + " wins");
    } else if (this.player2.health === 0) {
      this.winMsg1.textContent = this.player1.name + " wins";
      console.log(this.player1.name + " wins");
    }
  }

  // Check if the game has ended
  checkTheEnd() {
    if (this.player1.health === 0 || this.player2.health === 0)
      this.theEnd = true;
    this.declareWinner();
  }

  // Show current status of both players in console
  playerStatus() {
    console.log(
      this.player1.name + ":" + this.player1.health +
      " | " + this.player2.name + ":" + this.player2.health
    );
  }

  // Reset the game state
  reset() {
    console.log("Game reset");
    this.player1.health = 100;
    this.player2.health = 100;
    this.pl1.textContent = "Health: " + this.player1.health;
    this.pl2.textContent = "Health: " + this.player2.health;
    this.countPl1 = 0;
    this.countPl2 = 0;
    this.winMsg1.textContent = " ";
    this.winMsg2.textContent = " ";
    this.theEnd = false;
  }

  // Player 1 attacks Player 2
  pl1AttackPl2() {
    if (this.theEnd) return;

    const damagePl2 = Math.floor(Math.random() * 10) + 1;
    this.player2.health -= damagePl2;
    if (this.player2.health < 0) this.player2.health = 0;
    this.pl2.textContent = "Health: " + this.player2.health;
    this.playerStatus();
    this.checkTheEnd();
  }

  // Player 2 attacks Player 1
  pl2AttackPl1() {
    if (this.theEnd) return;

    const damagePl1 = Math.floor(Math.random() * 10) + 1;
    this.player1.health -= damagePl1;
    if (this.player1.health < 0) this.player1.health = 0;
    this.pl1.textContent = "Health: " + this.player1.health;
    this.playerStatus();
    this.checkTheEnd();
  }

  // Heal Player 1 (max 7 times)
  pl1Heal() {
    if (this.countPl1 >= 7 || this.player1.health >= 100 || this.theEnd) return;

    const healPl1 = Math.floor(Math.random() * 5) + 1;
    this.player1.health += healPl1;
    if (this.player1.health > 100) this.player1.health = 100;
    this.pl1.textContent = "Health: " + this.player1.health;
    this.countPl1++;
    this.playerStatus();
  }

  // Heal Player 2 (max 7 times)
  pl2Heal() {
    if (this.countPl2 >= 7 || this.player2.health >= 100 || this.theEnd) return;

    const healPl2 = Math.floor(Math.random() * 5) + 1;
    this.player2.health += healPl2;
    if (this.player2.health > 100) this.player2.health = 100;
    this.pl2.textContent = "Health: " + this.player2.health;
    this.countPl2++;
    this.playerStatus();
  }
}

const game = new Game();
