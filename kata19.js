//Queen Threat Detector

//Generate chessboard
function generateBoard(whiteQueen, blackQueen) {
  let board = [];
  for (let y = 0; y < 8; y++) {
    board.push([]);
    for (let x = 0; x < 8; x++) {
      if ((whiteQueen[0] === x && whiteQueen[1] === y) || (blackQueen[0] === x && blackQueen[1] === y)) {
        board[y].push(1);
      } else {
        board[y].push(0);
      }
    }
  }
  return board;
}

function queenThreat(board) {

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (board[y][x] === 1) {
        //Check vertical and horizontal condition
        for (let z = 0; z < 8; z++) {
          if (((board[y][z] === 1) && (z != x)) || ((board[z][x] === 1) && (z != y))) {
            return true;
          }
        }
        //Check negative y negative x direction
        let counter = 0;
        if (x > y) {
          counter = y;
        } else {
          counter = x;
        }
        for (let i = 1; i <= counter; i++) {
          if (board[y - i][x - i] === 1) {
            return true;
          }
        }
        //Check positive y negative x direction
        if (7-y > x) {
          counter = x;
        } else {
          counter = 7-y;
        }
        // y = 0, x = 5
        for (let i = 1; i <= counter; i++) {
          if (board[y + i][x - i] === 1) {
            return true;
          }
        }
        //Check negative y positive x direction
        if (7-x > y) {
          counter = y;
        } else {
          counter = 7-x;
        }
        for (let i = 1; i <= counter; i++) {
          if (board[y - i][x + i] === 1) {
            return true;
          }
        }
        //Check positive y positive x direction
        if (7-x > 7-y) {
          counter = 7-y;
        } else {
          counter = 7-x;
        }
        for (let i = 1; i <= counter; i++) {
          if (board[y + i][x + i] === 1) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
