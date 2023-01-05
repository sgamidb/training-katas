import ansiEscapes from "ansi-escapes";

const CELL_ALIVE = '\u2593';
const CELL_DEAD = '\u00B7';

export type BINARY = 0 | 1;
export class Terminal{
  constructor(private readonly boardColumns: number) {
  }

  printBoard(board: Array<BINARY>): void{
    process.stdout.write(ansiEscapes.clearTerminal);
    process.stdout.write(ansiEscapes.cursorHide);

    board.forEach((value, index)=>{
      const x = Math.floor(index / this.boardColumns);
      const y = index % this.boardColumns;

      process.stdout.write(ansiEscapes.cursorTo(x,y));
      process.stdout.write(value===1 ? CELL_ALIVE : CELL_DEAD);
    })
  }
}
