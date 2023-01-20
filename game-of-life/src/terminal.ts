import ansiEscapes from "ansi-escapes";
import {Board} from "./game-of-life.js";

const CELL_ALIVE = '\u2593';
const CELL_DEAD = '\u00B7';
export class Terminal{
  constructor(private readonly boardColumns: number) {
  }

  printBoard(board: Board): void{
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

  convertBoard(board: Board): Array<number> {
    return board.board.flat();
  }
}
