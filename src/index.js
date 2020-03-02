import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('game-canvas');

  document.getElementById('start-button').addEventListener('click', (e) => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game-canvas').style.display = 'flex';
    const game = new Game(canvas);
    game.start();
    game.play();
    game.HP();
  });
});


