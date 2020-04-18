const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");

const cvsNext = document.getElementById("nextPiece");
const ctxNext = cvsNext.getContext("2d");

const scoreElement = document.querySelector('#score');

row = 20;
col = 10;
sq = 30;
vacant = "#4F458D";
board = [];
gameOver = false;

interval = null;

piece = null;

level = 1;
score = 0;
time = 1000;

const next = new NextPiece();

for (let r = 0; r < row; r++) {
  board[r] = [];
  for (let c = 0; c < col; c++) {
    board[r][c] = vacant;
  }
}

drawBoard();

function inicialize() {
  if (!piece) {
    piece = randomPiece();
    nextPiece = randomPiece();

    next.updatePiece(nextPiece.activeTetromino, nextPiece.color);

    document.addEventListener("keydown", control);

    drop();
  }
}

function reset() {
  drawBoard();
  level = 1;
  score = 0;
  time = 1000;

  piece = null;

  clearInterval(interval);

  inicialize();
}

function drop() {
  interval = setInterval(function () {
    piece.moveDown();
  }, time);
}

function drawSquare(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * sq, y * sq, sq, sq);

  ctx.strokeStyle = vacant;
  ctx.strokeRect(x * sq, y * sq, sq, sq);
}

function drawBoard() {
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      drawSquare(c, r, board[r][c]);
    }
  }
}

function control(event) {
  if (event.keyCode == 65) {
    piece.moveLeft();
  } else if (event.keyCode == 87) {
    piece.rotate();
  } else if (event.keyCode == 68) {
    piece.moveRight();
  } else if (event.keyCode == 83) {
    piece.moveDown();
  }
}

function newPiece() {
  piece = nextPiece;
  nextPiece = randomPiece();
  next.updatePiece(nextPiece.activeTetromino, nextPiece.color);
}

function randomPiece() {
  let r = Math.floor(Math.random() * PIECES.length)
  return new Piece(PIECES[r][0], PIECES[r][1]);
}

function uploadScore(s) {
  score += s;
  scoreElement.textContent = score;

  updateLevel();
}

function updateLevel() {
  if (score > 600) {
    level++;
    time = 800;
    clearInterval(interval);
    drop();
  } else if (score > 900) {
    level++;
    time = 700;
    clearInterval(interval);
    drop();
  }
}