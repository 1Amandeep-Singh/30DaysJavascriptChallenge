//Activity 4: Solve the "N-Queens" problem on LeetCode.

//Task 4: Write a function that placed n queens on an n*n chessboard such that no two queens attack each other,
//and returns all distinct solutions to the n-queens puzzle.
//Log the distinct solutions for a few test cases.
function solveNQueens(n) {
    const results = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
  
    function isSafe(row, col) {
      // Check column
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false;
      }
      // Check upper-left diagonal
      for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
      }
      // Check upper-right diagonal
      for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return false;
      }
      return true;
    }
  
    function solve(row) {
      if (row === n) {
        // Solution found
        results.push(board.map(r => r.join('')));
        return;
      }
      for (let col = 0; col < n; col++) {
        if (isSafe(row, col)) {
          board[row][col] = 'Q';
          solve(row + 1);
          board[row][col] = '.'; // Backtrack
        }
      }
    }
  
    solve(0);
    return results;
  }
  
  // Helper function to print solutions
  function printSolutions(solutions) {
    solutions.forEach((solution, index) => {
      console.log(`Solution ${index + 1}:`);
      solution.forEach(row => console.log(row));
      console.log();
    });
  }
  
  // Test cases
  const testCases = [4, 8, 5]; // You can add more sizes if needed
  
  testCases.forEach(n => {
    console.log(`\nSolving ${n}-Queens Problem:\n`);
    const solutions = solveNQueens(n);
    printSolutions(solutions);
  });