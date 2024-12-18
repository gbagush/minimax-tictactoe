export class TicTacToe {
  board: Board;

  constructor(board: Board) {
    this.board = board;
  }

  isWinner(player: string): boolean {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    return lines.some((line) =>
      line.every((pos) => this.board[pos] === player)
    );
  }

  isFull(): boolean {
    return !this.board.includes(null);
  }

  minimax(
    depth: number,
    alpha: number,
    beta: number,
    maximizing: boolean
  ): number {
    if (this.isWinner("X")) return 1;
    if (this.isWinner("O")) return -1;
    if (this.isFull()) return 0;

    if (maximizing) {
      let maxEval = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (this.board[i] === null) {
          this.board[i] = "X";
          const evaluation = this.minimax(depth + 1, alpha, beta, false);
          this.board[i] = null;
          maxEval = Math.max(maxEval, evaluation);
          alpha = Math.max(alpha, evaluation);
          if (beta <= alpha) break;
        }
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (let i = 0; i < 9; i++) {
        if (this.board[i] === null) {
          this.board[i] = "O";
          const evaluation = this.minimax(depth + 1, alpha, beta, true);
          this.board[i] = null;
          minEval = Math.min(minEval, evaluation);
          beta = Math.min(beta, evaluation);
          if (beta <= alpha) break;
        }
      }
      return minEval;
    }
  }

  getBestMove(): number {
    let bestVal = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < 9; i++) {
      if (this.board[i] === null) {
        this.board[i] = "X";
        const moveVal = this.minimax(0, -Infinity, Infinity, false);
        this.board[i] = null;
        if (moveVal > bestVal) {
          bestMove = i;
          bestVal = moveVal;
        }
      }
    }
    return bestMove;
  }
}
