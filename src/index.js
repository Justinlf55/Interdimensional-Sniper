import Game from './game';

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext("2d");
  const game = new Game(canvas);
  game.start();
  game.play();
  game.HP();
});


