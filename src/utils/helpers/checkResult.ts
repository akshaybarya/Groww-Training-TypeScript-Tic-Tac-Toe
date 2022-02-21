export default function checkResult(
  row: number,
  col: number,
  game: string[][]
) {
  if (row >= 1 && row <= 3 && col >= 1 && col <= 3) {
    if (
      rowCheck(row, col, game) ||
      colCheck(row, col, game) ||
      diagonalCheck(row, col, game)
    ) {
      return { matchOver: true, winner: game[row - 1][col - 1] };
    }
  }

  let flag = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (game[i][j] === "-") {
        flag = false;
        break;
      }
    }
    if (!flag) break;
  }

  return flag
    ? { matchOver: true, winner: "Draw" }
    : { matchOver: false, winner: "-" };
}

// check 1 - row
function rowCheck(row: number, col: number, game: string[][]) {
  const r = row - 1;
  return game[r][0] === game[r][1] && game[r][1] === game[r][2] ? true : false;
}

// check 2 - col
function colCheck(row: number, col: number, game: string[][]) {
  return game[0][col - 1] === game[1][col - 1] &&
    game[0][col - 1] === game[2][col - 1]
    ? true
    : false;
}

// check 3 - diagonal
function diagonalCheck(row: number, col: number, game: string[][]) {
  if (row === 2 && col === 2) {
    return (game[1][1] === game[0][0] && game[0][0] === game[2][2]) ||
      (game[1][1] === game[0][2] && game[1][1] === game[2][0])
      ? true
      : false;
  } else if (row !== 2 && col !== 2) {
    if (row === col) {
      return game[2][2] === game[1][1] && game[1][1] === game[0][0]
        ? true
        : false;
    } else if (game[0][2] === game[1][1] && game[1][1] === game[2][0])
      return true;
  }
  return false;
}
