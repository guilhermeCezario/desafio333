function createPiece() {
  const state = {
    formats: null,
    formatActive: null,
    activePosition: 0,
    color: null,

    x: 4,
    y: -2
  }

  function ramdomPiece() {
    let r = Math.floor(Math.random() * PIECES.length);
    return {
      pieces: PIECES[r][0],
      color: PIECES[r][1]
    };
  }

  let data = ramdomPiece();
  
  state.formats = data.pieces;
  state.formatActive = data.pieces[state.activePosition];
  state.color = data.color;

  return state;
}