//leetcode.com/problems/available-captures-for-rook/
// easy rating
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let captures = 0;
  let rookRow = null;
  let rookIndex = null;
  // find row rook is in
  // find index of rook
  // explore all 4 possible moves and outcomes
  board.forEach((row, i) => {
    if (row.includes("R")) rookRow = i;
  });
  rookIndex = board[rookRow].indexOf("R");

  // move rook right
  for (let i = rookIndex; i < board[rookRow].length; i++) {
    if (board[rookRow][i] === "B") break;
    if (board[rookRow][i] === "p") {
      captures++;
      break;
    }
  }
  // move rook left
  for (let i = rookIndex; i >= 0; i--) {
    if (board[rookRow][i] === "B") break;
    if (board[rookRow][i] === "p") {
      captures++;
      break;
    }
  }
  // move rook south
  for (let i = rookRow; i < board.length; i++) {
    if (board[i][rookIndex] === "B") break;
    if (board[i][rookIndex] === "p") {
      captures++;
      break;
    }
  }
  // move rook north
  for (let i = rookRow; i >= 0; i--) {
    if (board[i][rookIndex] === "B") break;
    if (board[i][rookIndex] === "p") {
      captures++;
      break;
    }
  }
  return captures;
};
