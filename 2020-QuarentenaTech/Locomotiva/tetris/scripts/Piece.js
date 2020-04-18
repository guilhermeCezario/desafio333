class Piece {
  constructor(tetromino, color) {
    this.tetromino = tetromino;
    this.color = color;
    this.tetrominoN = 0;
    this.activeTetromino = this.tetromino[this.tetrominoN];

    this.x = 3;
    this.y = -2;
  }

  fill(color) {
    for (let r = 0; r < this.activeTetromino.length; r++) {
      for (let c = 0; c < this.activeTetromino.length; c++) {
        if (this.activeTetromino[r][c]) {
          drawSquare(this.x + c, this.y + r, color);
        }
      }
    }
  }
  draw() {
    this.fill(this.color);
  }
  unDraw() {
    this.fill(vacant);
  }
  moveDown() {
    if (!this.collision(0, 1, this.activeTetromino)) {
      this.unDraw();
      this.y++;
      this.draw();
    } else {
      if (!gameOver) {
        this.lock();
        newPiece();
      }else{
        handleGameOver();
      }
    }
  }
  moveRight() {
    if (!this.collision(1, 0, this.activeTetromino) && !gameOver) {
      this.unDraw();
      this.x++;
      this.draw();
    }
  }
  moveLeft() {
    if (!this.collision(-1, 0, this.activeTetromino) && !gameOver) {
      this.unDraw();
      this.x--;
      this.draw();
    }
  }
  rotate() {
    let nextPattern = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];
    let kick = 0;

    if (this.collision(0, 0, nextPattern)) {
      if (this.x > col / 2) {
      } else {
        kick = 1
      }
    }

    if (!this.collision(kick, 0, nextPattern)) {
      this.unDraw();
      this.x += kick;
      this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
      this.activeTetromino = this.tetromino[this.tetrominoN];
      this.draw();
    }
  }
  lock() {
    console.log(gameOver);
    if (this.y < 0) {
      console.log('game over');
      clearInterval(interval);
      gameOver = true;
      return;
    }

    uploadScore(10);

    for (let r = 0; r < this.activeTetromino.length; r++) {
      for (let c = 0; c < this.activeTetromino.length; c++) {
        if (this.activeTetromino[r][c]) {
          board[this.y + r][this.x + c] = this.color;
        }
      }
    }
    for (let r = 0; r < row; r++) {
      let isRowFull = true;
      for (let c = 0; c < col; c++) {
        isRowFull = isRowFull && (board[r][c] != vacant);
      }
      if (isRowFull) {
        uploadScore(150);
        for (let y = r; y > 1; y--) {
          for (let c = 0; c < col; c++) {
            board[y][c] = board[y - 1][c];
          }
        }
        for (let c = 0; c < col; c++) {
          board[0][c] = vacant;
        }
      }
    }
    drawBoard();
  }
  collision(x, y, piece) {
    for (let r = 0; r < piece.length; r++) {
      for (let c = 0; c < piece.length; c++) {
        if (!piece[r][c]) {
          continue;
        }
        let newX = this.x + c + x;
        let newY = this.y + r + y;

        if (newX < 0 || newX >= col || newY >= row) {
          return true;
        }

        if (newY < 0) {
          continue;
        }

        if (board[newY][newX] != vacant) {
          return true;
        }
      }
    }
    return false;
  }
}