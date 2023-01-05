import {Terminal} from "./terminal.js";
import {GameOfLife} from "./game-of-life.js";

let shouldRun = true;
let interval = setInterval(gameLoop, 1000);

const ROWS = 15;
const COLS = 50;

const terminal = new Terminal(COLS);
const gameOfLife = new GameOfLife(COLS, ROWS);

function gameLoop(){
  const board = gameOfLife.getNextFrame();
  terminal.printBoard(board)

  if(!shouldRun){
    clearInterval(interval);
  }
}


process.on('SIGINT', () => {
  shouldRun=false;
})

