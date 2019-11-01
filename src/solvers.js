/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {
  var board = new Board({ n: n });
  var x = 0;
  // debugger;
  var addPiece = function (matrix) {
    if (x < n) {
      matrix.togglePiece(x, x);

      // for (var i = 0; i < n; i++) {
      //   if (!board.rows()[0][i]) {
      //     board.rows()[0][i] = 'x';
      //   }
      // }
      // for (var h = 0; h < n; h++) {
      //   if (!board.rows()[h][0]) {
      //     board.rows()[h][0] = 'x';
      //   }
      // }
    } else {
      return;
    }
    x++;
    addPiece(board);
  };

  addPiece(board);

  var solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {


  // var addPiece = function (rowIndex) {

  //   for (var i = 0; i < n; i++) {
  //     if (!board.rows()[rowIndex][i]) {
  //       board.togglePiece(rowIndex, i);
  //     }
  //     for (var x = 0; x < n; x++) {
  //       if (!board.rows()[0][x]) {
  //         board.rows()[0][x] = 'x';
  //       }
  //     }
  //     for (var h = 0; h < n; h++) {
  //       if (!board.rows()[h][i]) {
  //         board.rows()[h][i] = 'x';
  //       }
  //     }
  //     var colIdx = i;
  //     for (var w = 1; w < n; w++) {
  //       if (!board.rows()[w][colIdx + 1]) {
  //         board.rows[w][colIdx + 1] = 'x';
  //       }
  //       colIdx++;
  //     }
  //   }
  //   addPiece(rowIndex++);
  // };
  // addPiece(0);
  var board = new Board({ n: n });
  var addPiece = function (matrix, colIndex, RowIndex) {
    var count = 0;
    if (!matrix.hasAnyQueensConflicts && count === n) {
      return;
    }
    matrix.togglePiece(colIndex, rowIndex);

    for (var i = 0; i < n; i++) {
      addPiece();
      hasAnyQueensConflicts
    }
  };
  addPiece(board.togglePiece(0, 0))
  var solution = board.rows();
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
