const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");

const scoreElement = document.querySelector('#score');
const levelElement = document.querySelector('#level');

const game = createGame();

game.createGrid();
game.drawGrid();

function control(event) {
  game.movePiece(event.keyCode);
}

function inicialize() {
  game.inicialize();
}

document.addEventListener("keydown", control);