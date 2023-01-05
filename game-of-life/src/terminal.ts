import ansiEscapes from "ansi-escapes";

const CELL_ALIVE = '\u2593';
const CELL_DEAD = '\u00B7';
export class Terminal{
  constructor(private readonly boardColumns: number) {
  }

  printBoard(board: unknown): void{
    const convertedBoard = this.convertBoard(board);
    process.stdout.write(ansiEscapes.clearTerminal);
    process.stdout.write(ansiEscapes.cursorHide);

    convertedBoard.forEach((value, index)=>{
      const y = Math.floor(index / this.boardColumns);
      const x = index % this.boardColumns;

      process.stdout.write(ansiEscapes.cursorTo(x,y));
      process.stdout.write(value===1 ? CELL_ALIVE : CELL_DEAD);
    })
  }

  convertBoard(board: unknown): Array<number> {
    // Do something if input board is not an instance of Array<number>
    return board as Array<number>;
  }
}
