import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('game-canvas');

  document.getElementById('start-button').addEventListener('click', (e) => {
    // document.getElementById('menu').innerHTML = 'test';
    document.getElementById('menu').style.display = 'none';
    console.log('test');
    const game = new Game(canvas);
    game.start();
    game.play();
    game.HP();
  });
});


