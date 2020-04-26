function createGame() {
  const state = {
    grid: [],
    col: 10,
    row: 20,
    colorSquare: '#4F458D',
    sizeSquare: 30,

    audioMovement: new Audio('./audios/movement.mp3'),
    audioImpact: new Audio('./audios/impact.mp3'),
    audioDropRow: new Audio('./audios/droprow.mp3'),

    score: 0,
    level: 1,

    piece: null,

    gameover: false,
    pause: false,

    timeDrop: 1000,
    handlerDrop: null
  }

  function inicialize() {
    if (state.grid) {
      state.piece = createPiece();

      state.audioMovement.volume = 0.3;
      state.audioImpact.volume = 0.3;

      fill(state.piece.color);
      play();
    }
  }

  function play() {
    state.pause = false;
    state.handlerDrop = setInterval(function () {
      moveTo(0, 1, state.piece.formatActive);
    }, state.timeDrop);
  }

  function pause() {
    state.pause = true;
    clearInterval(state.handlerDrop);
  }

  function createGrid() {
    for (let r = 0; r < state.row; r++) {
      state.grid[r] = [];
      for (let c = 0; c < state.col; c++) {
        state.grid[r][c] = state.colorSquare;
      }
    }
  }

  function drawGrid() {
    for (let r = 0; r < state.row; r++) {
      for (let c = 0; c < state.col; c++) {
        drawSquare(c, r, state.grid[r][c])
      }
    }
  }

  function movePiece(command) {
    switch (command) {
      case 65:
        moveTo(-1, 0, state.piece.formatActive);
        break;

      case 87:
        let piece = state.piece.formats[(state.piece.activePosition + 1) % state.piece.formats.length];
        moveTo(0, 0, piece);
        break;

      case 68:
        moveTo(1, 0, state.piece.formatActive);
        break;

      case 83:
        moveTo(0, 1, state.piece.formatActive);
        break;

      case 80:
        state.pause ? play() : pause();
        break;
    }
  }

  function moveTo(x, y, piece) {
    if (state.pause || state.gameover) {
      return;
    }

    let theCollision = collision(x, y, piece);

    if (theCollision == 'ok') {
      fill(state.colorSquare);
      if (state.piece.formatActive !== piece) {
        state.piece.formatActive = piece;
        state.piece.activePosition = (state.piece.activePosition + 1) % state.piece.formats.length;
      }

      state.piece.x += x;
      state.piece.y += y;

      state.audioMovement.play();


      fill(state.piece.color);
    } else if (theCollision == 'next') {
      lock = lockGrid();
      if (lock == 'ok') {
        state.audioImpact.play();
        handlerLevelAndScore('piece');

        state.piece = createPiece();
        fill(state.piece.color);
      } else if (lock == 'gameover') {
        state.gameover = true;
      }

    }
  }

  function lockGrid() {
    if (state.piece.y < 0) {
      return 'gameover';
    }

    for (let r = 0; r < state.piece.formatActive.length; r++) {
      for (let c = 0; c < state.piece.formatActive.length; c++) {
        if (state.piece.formatActive[r][c]) {
          state.grid[state.piece.y + r][state.piece.x + c] = state.piece.color;
        }
      }
    }

    for (let r = 0; r < state.row; r++) {
      if (!state.grid[r].some(col => col == state.colorSquare)) {
        handlerLevelAndScore('rowfull');
        state.audioDropRow.play();

        state.grid[r].forEach((element, index) => {
          state.grid[r][index] = state.colorSquare;
        });
        for (let y = r; y > 1; y--) {
          for (let c = 0; c < state.col; c++) {
            state.grid[y][c] = state.grid[y - 1][c];
          }
        }
      }
    }
    drawGrid();

    return 'ok';
  }

  function collision(x, y, piece) {
    for (let r = 0; r < piece.length; r++) {
      for (let c = 0; c < piece.length; c++) {
        if (piece[r][c]) {
          let newX = state.piece.x + c + x;
          let newY = state.piece.y + r + y;

          if (newX < 0 || newX >= state.col) {
            return false;
          }

          if (newY > 0) {
            if (newY >= state.row || state.grid[newY][newX] !== state.colorSquare) {
              return 'next';
            }
          }

        }
      }
    }

    return 'ok';
  }

  function fill(color) {
    for (let r = 0; r < state.piece.formatActive.length; r++) {
      for (let c = 0; c < state.piece.formatActive.length; c++) {
        if (state.piece.formatActive[r][c]) {
          game.drawSquare(state.piece.x + c, state.piece.y + r, color);
        }
      }
    }
  }

  function drawSquare(x, y, color) {
    let {
      sizeSquare: size
    } = state;

    ctx.fillStyle = color;
    ctx.fillRect(x * size, y * size, size, size);

    ctx.strokeStyle = state.colorSquare;
    ctx.strokeRect(x * size, y * size, size, size);
  }

  function handlerLevelAndScore(item) {
    if (item == 'rowfull') {
      state.score += 120;
    } else if (item == 'piece') {
      state.score += 10;
    }

    if (state.score / state.level > 500) {
      state.level += 1;

      state.timeDrop = (state.timeDrop / 2) + (state.timeDrop / 2 / 2);

      pause();
      play();
    }

    updateElements();
  }

  function updateElements() {
    scoreElement.textContent = state.score;
    levelElement.textContent = state.level;
  }

  return {
    inicialize,
    createGrid,
    drawSquare,
    drawGrid,
    movePiece
  }
}