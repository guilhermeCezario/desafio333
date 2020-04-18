class NextPiece {
  constructor() {
    this.col = 7;
    this.row = 4;
    this.board = [];
    this.vacant = "#4F458D";

    for (let r = 0; r < this.row; r++) {
      this.board[r] = [];
      for (let c = 0; c < this.col; c++) {
        this.board[r][c] = this.vacant;
      }
    }

    this.drawBoard();
  }
  draw() {
    for (let r = 0; r < this.piece.length; r++) {
      for (let c = 0; c < this.piece.length; c++) {
        if (this.piece[r][c]) {
          if(this.piece.length == 3) {
            this.drawSquare(c + 2, r + 1, this.color);
          }else {
            this.drawSquare(c + 2, r, this.color);
          }
        }
      }
    }
  }
  unDraw() {

  }

  drawSquare(x, y, color) {
    ctxNext.fillStyle = color;
    ctxNext.fillRect(x * sq, y * sq, sq, sq);
  }

  drawBoard() {
    for (let r = 0; r < this.row; r++) {
      for (let c = 0; c < this.col; c++) {
        this.drawSquare(c, r, this.board[r][c]);
      }
    }
  }

  updatePiece(piece, color) {
    this.piece = piece;
    this.color = color;
    this.drawBoard();
    this.draw();
  }
}