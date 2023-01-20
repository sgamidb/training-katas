export class GameOfLife{
  private board: Board;
  constructor(board: Board) {
    this.board = board;
  }

  public getNextFrame(): Board{
    const nextBoard = {
      cols: this.board.cols,
      rows: this.board.rows,
      board: [...Array(this.board.rows)].map(()=>[...Array(this.board.cols)].map(()=>0)),
    };

    this.board.board.forEach((rows, indexRow)=>{
      rows.forEach((cell, indexCell)=>{
        const nextCellState = nextState(!!cell, getLiveNeighbours(this.board.board, indexRow, indexCell));
        nextBoard.board[indexRow][indexCell] = nextCellState;
      })
    })
    this.board = nextBoard;
    return this.board;
  }
}

export type Board = {
  cols: number;
  rows: number;
  board: Array<Array<number>>;
}

export const nextState = (cellIsAlive: boolean, aliveNeighbours: number): number => {

  if (cellIsAlive) {
    if (aliveNeighbours < 2 || aliveNeighbours > 3) {
      return 0
    }
    return 1
  }
  return aliveNeighbours === 3 ? 1 : 0

}


export const getLiveNeighbours = (board: Array<Array<number>>, x: number, y: number): number => {
  const isInBoard = ([i, j]: number[]): boolean => i >= 0 && j >= 0 && i < board.length && j < board[i].length;
  const potentialNeighboursPositions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [1, 0], [1, 1], [0, 1], [1, -1]];

  return potentialNeighboursPositions.map(([i, j]) => [i + x, j + y])
    .filter(isInBoard)
    .reduce((aliveCells, [i, j]) => aliveCells += board[i][j], 0);
}
